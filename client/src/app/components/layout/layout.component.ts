import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ICities } from '../../interfaces/cities.interface';
import { IHotelsDesc } from '../../interfaces/hotel-description.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { ModalDirective } from 'ng2-bootstrap/modal';
import {Modal} from "ngx-modal";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cities: ICities[];
  hotels: IHotelsDesc[];
  cityId: number;
  cityName: string;
  selectedCity: string = '';
  hotelData: string;
  noOfHotels: number = 0;

  rForm: FormGroup;
  hotelName: string;
  hotelDesc: string;
  hotelZip: number;
  validMsg: string = 'This field is required';
  hotelDetails:any;
  postData: string;

  overview = true;
  cityList = false;



  constructor( private dataService: DataService, private fb: FormBuilder ) {
    this.rForm = fb.group({
      'hotelName' : [null, Validators.required],
      'hotelDesc' : [null, Validators.required],
      'hotelZip' : [null, Validators.required]
    });
  }

  ngOnInit() {
    //show cities on init
    this.dataService.getCities().subscribe(
      (cities) => {this.cities = cities},
      error => alert(error),
      () => console.log("cities populated...")
      );

  }

  //Show Hotels
  showHotels(id,name){
    this.overview = false;
    this.cityList = true;

    this.dataService.getHotels(id).subscribe(
      (hotels) => {this.hotels = hotels} ,
      error => alert(error),
      () => this.noOfHotels = this.hotels.length.valueOf()
      );
    this.cityId = id;
    this.cityName = name;
    this.selectedCity = name;


  }

  //Show Overview
  showOverview(){
    this.selectedCity = '';
    this.cityList = false;
    this.overview = true;
  }

  //Add Hotel
  addHotel(hotelDetailsPost){

    this.hotelName = hotelDetailsPost.hotelName;
    this.hotelDesc = hotelDetailsPost.hotelDesc;
    this.hotelZip = hotelDetailsPost.hotelZip;

    this.hotelDetails = {zipCode: this.hotelZip, cityId: this.cityId, name: this.hotelName, description: this.hotelDesc};

    this.dataService.postHotels(this.hotelDetails).subscribe(

      resp => this.hotelData = JSON.stringify(resp),
      error => alert(error),
      () =>

      this.dataService.getHotels(this.cityId).subscribe(
        (hotels) => {this.hotels = hotels} ,
        error => alert(error),
        () => this.rForm.reset()
      )
    );






  }


}



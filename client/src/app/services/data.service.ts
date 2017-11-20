import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfigUrl } from '../app.config'

@Injectable()
export class DataService {
  total: number = 0;
  lastCredit: number = 0;
  lastDebit: number = 0;
  id: number = 1;
  constructor(private http: Http) {
    console.log("data service connected...");
  }

  getCities(){
    return this.http.get(ConfigUrl.concat(`cities`)).map(res => res.json());
  }
  getHotels(id){
    return this.http.get(ConfigUrl.concat(`hotels?cityId=${id}`)).map(res => res.json());
  }
  postHotels(value){
    var json = JSON.stringify(value);
    var params = json;
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(ConfigUrl.concat(`hotels`),
      params,{
        headers: headers
      } )
      .map(res => res.json());
  }
}

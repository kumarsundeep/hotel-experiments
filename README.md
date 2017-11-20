# Hotel Experiments

Sample experimental features of hotel app:

1. It can fetch city list dynamically from db and show on page.
2. It shows individual hotels list w.r.t city.
3. It can Add Hotel.
4. Show No. of Hotels found in the city.
5. App automatically identifies city and add hotel to hotel list with respective to city, so no need to specify city when adding an hotel.
6. The app will work perfectly fine and add hotels even if new cities get added in db.
7. In Add Hotel only required validation is added for demonstration purpose only.
8. API request error handliing > if call not made, error will be shown in browser alert box.

## For Server Installation

`cd server`, then `npm i` in sudo or administrator mode(preferred)

### Run Server

Run `npm run json:server` to start mock server at `http://localhost:3000/`

## For Client Installation

`cd client`, then `npm i` in sudo or administrator mode(preferred)


### Run Client

Run `ng serve`. Navigate to `http://localhost:4200/`.


### Build Client

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests in Client

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests in Client

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

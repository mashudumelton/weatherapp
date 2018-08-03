import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

 getData(city){
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=4b347d406be1d70c38f02bf02540fa65');
}

// johannesburg(){
//   return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=johannesburg&APPID=4b347d406be1d70c38f02bf02540fa65');
// }
}

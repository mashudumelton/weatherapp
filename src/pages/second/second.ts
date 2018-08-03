import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  city: string;
  info;
  infoList;
  conditionCode;
  iconCode : string;
  display = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public data:DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }
  
  getResults(){
    this.data.getData(this.city).subscribe(data=>{
      this.info = data;
    
      console.log(this.info);
      this.infoList=this.info.data;
      //  this.display = 1;

      this.iconCode = this.info.weather[0].icon;
      this.conditionCode = "http://openweathermap.org/img/w/"+ this.iconCode +".png";
    }) 
  }
  ref(){
    //  this.display = 0;
    this.city = null;
    }
  

}

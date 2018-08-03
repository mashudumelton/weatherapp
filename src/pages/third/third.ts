
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {
  tempChange: any;
  currentTemp: any;
  weatherData;
  create(arg0: any): any {}
  city: string;

  infoList;
  conditionCode;
  iconCode : string;
 

temp_min:number;
temp_max:number;
temp:number;
Celcius:string;
Kelvin:string;
Fahrenheit:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public data:DataProvider) {
    this.currentTemp = "Kelvin";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }
  onInput(){

    this.data.getData(this.city).subscribe(data=>{
      this.weatherData = data;
    
       console.log(this.weatherData);
       this.infoList=this.weatherData.data;
      
   
      this.iconCode = this.weatherData.weather[0].icon;
      this.conditionCode = "http://openweathermap.org/img/w/"+ this.iconCode +".png";
    }) 
  }

    
    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
  
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);
    }

    temperatureChange(){
      console.log('oooooooo'+this.tempChange)
      
      switch(this.tempChange){
        case 'Kelvin':
            if(this.currentTemp=='Celcius'){
              this.temp = this.weatherData.main.temp;
              this.temp_min = this.weatherData.main.temp_min;
              this.temp_max = this.weatherData.main.temp_max;
            }else if(this.currentTemp=='Fahrenheit'){
             // F = 9/5 (K - 273) + 32
             this.temp = ((9/5*Math.floor(this.weatherData.main.temp-273)+32)-32) + 273 ;
             this.temp_min = ((9/5*Math.floor(this.weatherData.main.temp_min-273)+32)-32) + 273 ;
             this.temp_max = ((9/5*Math.floor(this.weatherData.main.temp_max-273)+32)-32) + 273 ;
            }
            this.currentTemp = this.tempChange;
          break;
        case 'Celcius':
        if(this.currentTemp=='Kelvin'){
          this.temp = Math.floor(this.weatherData.main.temp-273.15);
          this.temp_min= Math.floor(this.weatherData.main.temp_min-273.15);
          this.temp_max = Math.floor(this.weatherData.main.temp_max-273.15);
        }else if(this.currentTemp=='Fahrenheit'){
          // F = 9/5 ( ° C) + 32  Fahrenheit to Celsius C = 5/9 (° F - 32)
          this.temp = 5/9*((9/5*Math.floor(this.weatherData.main.temp-273.15) +32) - 32);
          this.temp_min = 5/9*((9/5*Math.floor(this.weatherData.main.temp_min-273.15) +32) - 32);
          this.temp_max = 5/9*((9/5*Math.floor(this.weatherData.main.temp_max-273.15) +32) - 32);
        }
        this.currentTemp = this.tempChange;
          break;
        case 'Fahrenheit':
        if(this.currentTemp=='Celcius'){
        
          this.temp = 9/5*Math.floor(this.weatherData.main.temp-273)+32;

          this.temp_min = 9/5*Math.floor(this.weatherData.main.temp_min-273)+32;
          this.temp_max = 9/5*Math.floor(this.weatherData.main.temp_max-273)+32;
        }else if(this.currentTemp=='Kelvin'){
          

          this.temp = 1.8*Math.floor(this.weatherData.main.temp-273.15) + 32;
          this.temp_min = 1.8*Math.floor(this.weatherData.main.temp_min-273.15) + 32;
          this.temp_max = 1.8*Math.floor(this.weatherData.main.temp_max-273.15) + 32;
        }
        this.currentTemp = this.tempChange;
          break;
      }

    }
}

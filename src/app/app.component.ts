import { Component, OnInit } from '@angular/core';
import { WeatherService } from './app.service';
import { WeatherInfo } from './weatherInfo';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [ WeatherService ],
})
export class AppComponent implements OnInit { 
  constructor (private weatherService: WeatherService) {}
  errorMessage: string;
  weatherInfo = new WeatherInfo(0,'',{},[{}]);

  ngOnInit() { 
    this.getWeather(); 
  }

  getWeather() {
    this.errorMessage = '';
    this.weatherService.getWeather()
                     .subscribe(
                       weatherInfo => this.weatherInfo = weatherInfo,
                       error =>  this.errorMessage = <any>error);
  }
}

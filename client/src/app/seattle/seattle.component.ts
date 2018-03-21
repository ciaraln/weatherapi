import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
    humidity: any;
    avg: any;
    high: any;
    low: any;
    status: any;
  constructor( private _weather: WeatherService) { }

  ngOnInit() {
    let observable = this._weather.getWeather('q=seattle')
  observable.subscribe(res => {
    console.log(res);
    this.humidity = res['main']['humidity'];
    this.avg = res['main']['temp'];
    this.high = res['main']['temp_max'];
    this.low = res['main']['temp_min'];
    this.status = res['weather'][0]['description']
  })
  }
}

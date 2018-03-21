import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private _weather: HttpClient) { }
  getWeather(city) {
    const endpoint = "http://api.openweathermap.org/data/2.5/weather?" + city + "&&appid=730e42615b9db5fd46fded0e517e8f2e";
    return this._weather.get(endpoint) // return oberservable
  }  
}

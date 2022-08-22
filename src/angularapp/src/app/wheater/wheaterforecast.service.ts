import { Injectable } from '@angular/core';
import { Weatherforecast } from './weatherforecast';
import { CurrentWeatherforecast } from './mock/weatherforecast.mock';

@Injectable({
  providedIn: 'root'
})
export class WheaterforecastService {

  constructor() { }

  getForecast(): Weatherforecast{
    return CurrentWeatherforecast;
  }
}

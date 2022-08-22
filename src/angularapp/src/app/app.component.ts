import { Component } from '@angular/core';
import { Weatherforecast } from './wheater/weatherforecast';
import { WheaterforecastService } from './wheater/wheaterforecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngapp';

  CurrentWeather: Weatherforecast | undefined;

  /**
   *
   */
  constructor(private weatherService: WheaterforecastService) {

  }

  ngOnInit(): void {
    this.CurrentWeather = this.weatherService.getForecast();
  }
}

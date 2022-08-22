import { Component } from '@angular/core';
import { Weatherforecast } from './wheater/weatherforecast';
import { WheaterforecastService } from './wheater/wheaterforecast.service';
import { WeatherforecastdetailComponent } from './weatherforecastdetail/weatherforecastdetail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngapp';

  todayForecast?: Weatherforecast;

  /**
   *
   */
  constructor(private weatherService: WheaterforecastService) {

  }

  ngOnInit(): void {
    this.loadWeatherForecast();
  }

  loadWeatherForecast(): void {
    
    this.weatherService.getToday().subscribe(w => this.todayForecast = w);
  }
}

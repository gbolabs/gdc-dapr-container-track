import { Injectable } from '@angular/core';
import { Weatherforecast } from './weatherforecast';
import { CurrentWeatherforecast } from './mock/weatherforecast.mock';
import { environment } from 'src/environments/environment'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheaterforecastService {

  constructor(
    private http: HttpClient) { }

  getToday(): Observable<Weatherforecast> {

    // return of<Weatherforecast>(CurrentWeatherforecast);

    return this.http.get<Weatherforecast>("http://127.0.0.1:35001/weatherforecast/today");
  }
}

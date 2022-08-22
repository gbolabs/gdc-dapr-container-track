import { Component, Input, OnInit } from '@angular/core';
import { Weatherforecast } from '../wheater/weatherforecast';

@Component({
  selector: 'app-weatherforecastdetail',
  templateUrl: './weatherforecastdetail.component.html',
  styleUrls: ['./weatherforecastdetail.component.css']
})
export class WeatherforecastdetailComponent implements OnInit {

  @Input() forecast?: Weatherforecast;

  constructor() { }

  ngOnInit(): void {
  }

}

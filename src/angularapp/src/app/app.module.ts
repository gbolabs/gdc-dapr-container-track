import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherforecastdetailComponent } from './weatherforecastdetail/weatherforecastdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherforecastdetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

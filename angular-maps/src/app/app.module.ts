import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenderComponent } from './home/gender/gender.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { MapComponent } from './map/map.component';
import { DonutChartComponent } from './home/donut-chart/donut-chart.component';
import { CountryChartComponent } from './home/country-chart/country-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderComponent,
    MapComponent,
    DonutChartComponent,
    CountryChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutChartComponent } from './home/donut-chart/donut-chart.component';

const routes: Routes = [
  {path: 'donut-chart', component: DonutChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

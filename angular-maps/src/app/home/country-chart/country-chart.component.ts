import { Component, OnInit } from '@angular/core';
import { MapService } from '../../Service/map.service';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnInit {
  chartOption:any;
  constructor(public empService: MapService) { }

  ngOnInit(): void {
    this.chartOption = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Overall Company Headcount'
      },
      xAxis: {
        categories: ['USA', 'UK','Canada']
      },
      yAxis: {
        title: {
          text: 'Headcount'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
            inside: true
          }
        }
      },
      series: [{
        name: 'Headcount',
        data: this.empService.dummyEmployeeData.map(item => ({
          name: item.country,
          y: item.headCount
        }))
      }],
    };
    
    Highcharts.chart('container', this.chartOption);
    
  }

}

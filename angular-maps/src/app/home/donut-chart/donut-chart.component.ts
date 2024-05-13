import { Component, OnInit } from '@angular/core';
import { MapService } from '../../Service/map.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_drilldown from 'highcharts/modules/drilldown';
import HC_more from 'highcharts/highcharts-more';
HC_exporting(Highcharts);
HC_drilldown(Highcharts);
HC_more(Highcharts);
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  chartOption:any;
  constructor(
    public empService: MapService
  ) { }

  ngOnInit(): void {
    // Display the headcount as per the Male/Female Ratio city wise
    this.chartOption = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Age Group'
      },
      xAxis: {
        categories: ['Male Female Radio']
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Headcount',
        data: this.empService.dummyEmployeeData.map(item => ({
          name: item.gender,
          y: item.headCount
        })),
      }],
    };
    Highcharts.chart('container', this.chartOption);
    
  }
}


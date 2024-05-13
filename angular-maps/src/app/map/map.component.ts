import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MapService } from '../Service/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  chartOption:any;
  constructor(
    public empService: MapService
  ) { }

  ngOnInit(): void {
    this.chartOption = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Gender Distribution Chart',
        align: 'center', 
        style: {
          fontWeight: 'bold', 
          fontSize: '16px'
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
          name: item.age,
          y: item.headCount
        }))
      }],
    };
    
    Highcharts.chart('overallHeadcountChart', this.chartOption);
    
    }
  }


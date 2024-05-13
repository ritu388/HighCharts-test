import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { MapService } from 'src/app/Service/map.service';
HC_exporting(Highcharts);
@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {
  totalEmployees: number = 0;
  chartOptions: Highcharts.Options = {};
  Highcharts: typeof Highcharts = Highcharts;
  constructor(private employeeService: MapService){
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.totalEmployees = data.length;
      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Overall Company Headcount'
        },
        xAxis: {
          categories: ['Total Employees']
        },
        yAxis: {
          title: {
            text: 'Count'
          }
        },
        series: [{
          type: 'column',
          name: 'Overall',
          data: [this.totalEmployees] 
        }],
        exporting: {
          enabled: true
        }
      };
    });
  }
}

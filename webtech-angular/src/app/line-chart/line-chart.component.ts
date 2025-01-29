import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  title = 'webtech-angular';

 
  public lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartPlugins = [];

  constructor() {
    console.log('LineChartComponent constructor');
  }

  ngOnInit() {
    console.log('LineChartComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('LineChartComponent ngOnDestroy');
  }

  


}

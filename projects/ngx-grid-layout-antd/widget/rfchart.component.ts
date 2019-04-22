import {Component, OnInit} from '@angular/core';
import {ChartData} from '../schema';

@Component({
  selector: 'yz-rfchart',
  template: `
    <v-chart [forceFit]="true" [height]="height" [data]="data">
      <v-tooltip></v-tooltip>
      <v-axis></v-axis>
      <v-line position="year*value"></v-line>
      <v-point position="year*value" shape="circle"></v-point>
    </v-chart>
  `,
  styles: []
})
export class RfchartComponent implements OnInit {

  data: Array<ChartData>;
  height: number = 400;

  constructor() {
  }

  ngOnInit() {
    console.log('图表数据。。。');
    console.log(this.data);
  }


}

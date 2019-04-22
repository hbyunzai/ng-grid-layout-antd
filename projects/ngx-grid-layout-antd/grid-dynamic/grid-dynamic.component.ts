import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataArray} from '../schema';

@Component({
  selector: 'ngx-grid-dynamic',
  templateUrl: './grid-dynamic.component.html',
  styleUrls: ['./grid-dynamic.component.less']
})
export class GridDynamicComponent implements OnInit {

  @Input() componentType: string;
  @Input() data: Array<DataArray>;

  // @Output('ToConfigure') ToConfigure = new EventEmitter();

  constructor() {
  }


  ngOnInit() {
  }


  /**
   * 配置控件
   */
  // configure() {
  //   this.ToConfigure.emit('outValue');
  // }
}

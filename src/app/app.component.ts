import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnChanges {
  @Input() child;

  public data = [
    // {'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '0', static: true, 'componentData': {component: null, data: {a: 1, b: 2}}, auto: false},
    // {'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': '1', static: false, 'componentData': {component: null, data: {a: 1, b: 2}}, auto: true},
    // {'x': 4, 'y': 0, 'w': 4, 'h': 5, 'i': '2', 'componentData': {component: null, data: {a: 1, b: 2}}, auto: false},
    // {'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': '3'},
    // {'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': '4', 'componentData': {component: null, data: {a: 1, b: 2}}, auto: false},
    {
      'x': 10,
      'y': 0,
      'w': 6,
      'h': 3,
      'i': '5',
      static: false,
      auto: false,
      componentType: 'menu',
      data: [{firstTitle: '11一级1', childList: []}, {firstTitle: '一级2', childList: [{firstTitle: '二级1'}, {firstTitle: '二级2'}]}]
    },
    {
      'x': 0,
      'y': 5,
      'w': 5,
      'h': 5,
      'i': '6',
      static: true,
      auto: false,
      componentType: 'chart',
      data: [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ]
    },
    {
      'x': 2, 'y': 5, 'w': 2, 'h': 5, 'i': '7', static: true, auto: true, componentType: 'menu'
    },
    // {'x': 4, 'y': 5, 'w': 2, 'h': 5, 'i': '8'},
    // {'x': 6, 'y': 4, 'w': 2, 'h': 4, 'i': '9'},
    // {'x': 8, 'y': 4, 'w': 2, 'h': 4, 'i': '10'},
    // {'x': 10, 'y': 4, 'w': 2, 'h': 4, 'i': '11'},
    // {'x': 0, 'y': 10, 'w': 2, 'h': 5, 'i': '12'},
    // {'x': 2, 'y': 10, 'w': 2, 'h': 5, 'i': '13'},
    // {'x': 4, 'y': 8, 'w': 2, 'h': 4, 'i': '14'},
    // {'x': 6, 'y': 8, 'w': 2, 'h': 4, 'i': '15'},
    // {'x': 8, 'y': 10, 'w': 2, 'h': 5, 'i': '16'},
    // {'x': 10, 'y': 4, 'w': 2, 'h': 2, 'i': '17'},
    // {'x': 0, 'y': 9, 'w': 2, 'h': 3, 'i': '18'},
    // {'x': 2, 'y': 6, 'w': 2, 'h': 2, 'i': '19'}
  ];

  public draggable = true;
  public resizable = true;
  public colNum = 12;
  public rowHeight = 40;
  public isDraggable = true;
  public isResizable = true;
  public verticalCompact = true;
  public useCssTransforms = true;
  public index = 0;
  public responsive = true;
  public nextId = 19;

  constructor(private _ngEle: ElementRef) {
  }

  ngOnInit() {
  }

  onDragEvent(): void {
    // console.log('onDragEvent-----1111');
  }

  ngOnChanges(change: SimpleChanges) {
    //   console.log('SimpleChanges',  change);
  }

  checkResponse() {
    this.responsive = !this.responsive;
  }

  checkDraggable() {
    this.draggable = !this.draggable;
  }

  checkResizable() {
    this.resizable = !this.resizable;
  }

  addItem() {
    // this.data.push({'x': 0, 'y': 0, 'w': 1, 'h': 1, 'i': '' + (++this.nextId), 'componentData': undefined});
    // this.data = JSON.parse(JSON.stringify(this.data));
  }

  asdf(event) {
    console.log(event);
  }
}

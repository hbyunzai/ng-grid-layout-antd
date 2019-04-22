import {Component, OnInit} from '@angular/core';
import {DataArray, Widget} from '../schema';

@Component({
  selector: 'yz-rfmenu',
  template: `
    <ul nz-menu [nzMode]="'horizontal'">
      <ng-container *ngFor="let item of data">
        <li nz-menu-item *ngIf="item.childList.length==0"><i nz-icon type="mail"></i>{{item.firstTitle}}</li>
        <li nz-submenu *ngIf="item.childList.length>0">
          <span title><i nz-icon type="setting"></i> {{item.firstTitle}}</span>
          <ul>
            <li nz-menu-item *ngFor="let sec of item.childList">{{sec.firstTitle}}</li>
          </ul>
        </li>
      </ng-container>
    </ul>
  `,
  styles: []
})
export class RfmenuComponent implements OnInit {

  data: Array<DataArray>;

  constructor() {
  }

  ngOnInit() {
  }


}

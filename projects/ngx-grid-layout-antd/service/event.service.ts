import {Injectable} from '@angular/core';
import * as eventemitter3 from 'eventemitter3';

@Injectable({providedIn: 'root'})
export class EventService {
  public _event;
  public _cols;
  public _width;

  constructor() {
    this._event = new eventemitter3();
  }
}

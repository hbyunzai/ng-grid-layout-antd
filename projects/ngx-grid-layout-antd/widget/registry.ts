import {Widget, WidgetType} from '../schema';
import {Injectable} from '@angular/core';
import {RfmenuComponent} from './rfmenu.component';
import {RfchartComponent} from './rfchart.component';


@Injectable()
export class WidgetRegistry {
  private widgets: { [componentType: string]: Widget } = {};

  register(componentType: string, widget: any) {
    this.widgets[componentType] = widget;
  }

  has(componentType: string) {
    return this.widgets.hasOwnProperty(componentType);
  }

  getType(componentType: string): any {
    if (this.has(componentType)) {
      return this.widgets[componentType];
    }
    return null;
  }
}

const WidgetType: Array<WidgetType> = [
  {
    label: '菜单',
    value: 'menu',
    component: RfmenuComponent
  },
  {
    label: '图表',
    value: 'chart',
    component: RfchartComponent
  }
];

export class NzWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();
    WidgetType.forEach((item) => {
      this.register(item.value, item.component);
    });
    // this.register('menu', RfmenuComponent);
    // this.register('chart', RfchartComponent);
  }
}

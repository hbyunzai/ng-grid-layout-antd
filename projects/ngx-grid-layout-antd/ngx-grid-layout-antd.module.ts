import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SharedModule} from './shared.module';
import {FlagDirective} from './directive/flag.directive';
import {GridItemComponent} from './grid-item/grid-item.component';
import {GridLayoutComponent} from './grid-layout/grid-layout.component';
import {GridDynamicComponent} from './grid-dynamic/grid-dynamic.component';
import {NzWidgetRegistry, WidgetRegistry} from './widget/registry';
import {RfdDirective} from './directive/rfd.directive';
import {RfmenuComponent} from './widget/rfmenu.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RfchartComponent} from './widget/rfchart.component';

const importComs = [
  GridItemComponent,
  GridLayoutComponent,
  GridDynamicComponent
];

const importDirective = [
  FlagDirective,
  RfdDirective
];

const COMPONENTS = [
  RfmenuComponent,
  RfchartComponent
];

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    ...importComs,
    ...importDirective,
    ...COMPONENTS,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ...importComs,
    ...importDirective,
    ...COMPONENTS
  ],
  entryComponents: [
    GridDynamicComponent,
    ...COMPONENTS
  ],
  providers: [
    {provide: WidgetRegistry, useClass: NzWidgetRegistry},
  ]
})
export class NgxGridLayoutAntdModule {
}

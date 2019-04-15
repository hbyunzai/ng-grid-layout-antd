import {NgModule} from '@angular/core';
import {SharedModule} from './shared.module';
import {FlagDirective} from './directive/flag.directive';
import {GridItemComponent} from './grid-item/grid-item.component';
import {GridLayoutComponent} from './grid-layout/grid-layout.component';

@NgModule({
  declarations: [
    GridItemComponent,
    GridLayoutComponent,
    FlagDirective
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GridItemComponent,
    GridLayoutComponent,
    FlagDirective
  ]
})
export class NgxGridLayoutAntdModule {
}

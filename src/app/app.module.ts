import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared.module';
import {NgxGridLayoutAntdModule} from 'ngx-grid-layout-antd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    NgxGridLayoutAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

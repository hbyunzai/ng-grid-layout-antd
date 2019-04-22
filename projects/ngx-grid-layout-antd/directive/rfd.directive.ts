import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {WidgetRegistry} from '../widget/registry';
import {DataArray, Widget} from '../schema';

@Directive({
  selector: '[rfd]'
})
export class RfdDirective implements Widget, OnChanges, OnInit {


  // @Input() formGroup: FormGroup;
  // @Input() formItem: FormItem;
  @Input() componentType: string;
  @Input() data: Array<DataArray>;
  component: ComponentRef<Widget>;

  constructor(private registry: WidgetRegistry,
              private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {

  }


  ngOnInit(): void {
    if (!this.registry.has(this.componentType)) {
      throw new Error(
        `暂无此控件类型 (${this.componentType}).`
      );
    }
    const component = this.resolver.resolveComponentFactory<Widget>(this.registry.getType(this.componentType));
    this.component = this.container.createComponent(component);
    this.component.instance.componentType = this.componentType;
    this.component.instance.data = this.data;
  }

  ngOnChanges(): void {
    if (this.component) {
      this.component.instance.componentType = this.componentType;
      this.component.instance.data = this.data;
    }
  }


}

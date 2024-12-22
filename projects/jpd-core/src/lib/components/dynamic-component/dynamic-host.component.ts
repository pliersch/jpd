import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { DynamicComponentService } from './dynamic-component.service';


@Component({
  selector: 'a4w-dynamic',
  template: `
    <ng-template appDynamicHost></ng-template>`,
  styles: [],
  imports: []
})
export class DynamicHostComponent implements OnInit {

  @ViewChild(DynamicComponentDirective, {static: true})
  componentHost!: DynamicComponentDirective;

  private currentComponent: Type<Component>;

  constructor(private componentService: DynamicComponentService) { }

  ngOnInit(): void {
    this.componentService.setHost(this);
  }

  loadWidget(component: Type<Component>): void {
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(component);
    this.currentComponent = component;
  }

  removeWidget(component: Type<Component>): void {
    if (component.name !== this.currentComponent.name) {
      console.log('WidgetComponent removeWidget not possible: ',
        component.name, this.currentComponent.name)
      return;
    }
    this.componentHost.viewContainerRef.clear();
  }

}

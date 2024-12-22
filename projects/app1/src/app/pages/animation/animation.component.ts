import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AbstractDefaultPageComponent } from 'jpd-core';

@Component({
    selector: 'app-animation',
    imports: [RouterLink, RouterOutlet, RouterLinkActive],
    templateUrl: './animation.component.html',
    styleUrl: './animation.component.css'
})
export class AnimationComponent extends AbstractDefaultPageComponent {

  // @HostBinding('@.disabled')
  // public animationsDisabled = false;

  constructor(private contexts: ChildrenOutletContexts) {
    super();
  }

  // getRouteAnimationData() {
  //   console.log(this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'])
  //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  // }
  //
  // toggleAnimations() {
  //   this.animationsDisabled = !this.animationsDisabled;
  // }

}

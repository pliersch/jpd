import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FragmentDirective } from '../../../common';
import { AppDataService } from '../../../core';
import { AdminService } from '../../../modules/admin';

@Component({
  selector: 'a4w-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export abstract class BaseComponent<T extends object> {

  protected router: Router;
  protected model: T;
  private appDataService: AppDataService;
  private adminService: AdminService;
  protected renderer: Renderer2;
  protected el: ElementRef;
  private adminNode: Element;
  private unListener: () => void;

  protected constructor(protected fragment?: FragmentDirective,) {
    this.appDataService = inject(AppDataService);
    this.adminService = inject(AdminService);

    this.renderer = inject(Renderer2);
    this.el = inject(ElementRef);
    this.router = inject(Router);
    // this.fragment = injector.get(FragmentDirective);
    this.readModelData();
    this.adminService.isAdminMode$.subscribe(mode => this.toggleEditMode(mode));
  }

  private readModelData(): void {
    this.model = this.appDataService.getComponentData(this, this.router.url, this.fragment?.appFragment);
  }

  private toggleEditMode(mode: boolean): void {
    const r = this.renderer;
    if (mode) {

      this.unListener = this.renderer.listen(this.el.nativeElement, 'click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.adminService.setActiveComponent(this)
        this.adminService.setComponentData(this.model)
      });

      // this.adminNode = r.createElement('div');
      // r.appendChild(this.el.nativeElement, this.adminNode);
      // // r.insertBefore(this.el.nativeElement, this.adminNode, this.el.nativeElement.firstChild);
      //
      // const button = r.createElement('button');
      // button.addEventListener('click', () => this.adminService.setComponentData(this.model));
      // r.appendChild(this.adminNode, button);
      //
      //
      // r.setStyle(this.el.nativeElement, 'position', 'relative');
      //
      //
      // r.setStyle(button, 'cursor', 'pointer');
      // r.setAttribute(button, 'mat-icon-button', '');
      // const icon = r.createElement('mat-icon');
      // r.appendChild(button, icon);
      // const text = r.createText('Bearbeiten')
      // r.appendChild(icon, text);
      //
      // const div = r.createElement('a');
      // r.appendChild(this.adminNode, div);
      // const icon2 = r.createElement('i');
      // r.appendChild(div, icon2);
      // r.addClass(icon2, 'material-icon')
      // r.appendChild(icon2, r.createText('edit'))
      //
      // r.setStyle(this.adminNode, 'position', 'absolute');
      // r.setStyle(button, 'top', '10px');
      // r.setStyle(button, 'left', '10px');
      // r.setStyle(this.adminNode, 'right', '30px');
      // r.setStyle(this.adminNode, 'bottom', '20px');
      // r.setStyle(this.adminNode, 'border', 'solid red');
      //
      // r.setStyle(this.el.nativeElement, 'z-index', 9000);
      // r.setStyle(this.el.nativeElement, 'background', 'green');

    } else if (this.adminNode) {
      r.removeChild(this.el.nativeElement, this.adminNode);
      this.unListener();
    }
  }
}
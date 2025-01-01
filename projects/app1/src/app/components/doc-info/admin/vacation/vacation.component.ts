import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  inject,
  viewChild,
  viewChildren
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Vacation } from '@app1/components/doc-info/admin/vacation/doc-vacation.model';
import { DocVacationStore } from '@app1/components/doc-info/admin/vacation/doc-vacation.store';

@Directive({
  selector: '[appInputHelp]',
  standalone: true
})
export class InputHelpDirective {}

export interface VacationTableItem {
  begin: Date | undefined;
  end: Date | undefined;
}

@Component({
    selector: 'app-doc-vacation',
  imports: [
    MatButton,
    ReactiveFormsModule,
    InputHelpDirective
  ],
    templateUrl: './vacation.component.html',
    styleUrl: './vacation.component.scss'
})
export class VacationComponent implements AfterViewInit {

  readonly inputs = viewChildren(InputHelpDirective, { read: ElementRef });

  readonly root = viewChild('root', { read: ElementRef });

  readonly store = inject(DocVacationStore);
  vacations: Vacation[] = [];
  newEntries: VacationTableItem[] = [{begin: undefined, end: undefined}];
  newLinePossible = false;

  checkDate($event: FocusEvent): void {
    const el = ($event.target as HTMLInputElement);
    if (!el.value) {
      el.style.color = 'red';
    } else {
      el.style.color = 'inherit'
    }
  }

  checkDateAndLine($event: FocusEvent): void {
    this.checkDate($event);
    for (const input of this.inputs()) {
      if (input.nativeElement.value === '') {
        this.newLinePossible = false;
        break;
      }
      this.newLinePossible = true;
    }
    if (this.newLinePossible) {
      this.newEntries.push({begin: undefined, end: undefined});
      this.newLinePossible = false;
    }
  }

  ngAfterViewInit(): void {
    const observer = new MutationObserver(() => {
      this.inputs().at(this.inputs().length - 2)?.nativeElement.focus()

    });
    observer.observe(this.root()!.nativeElement, {childList: true});
  }

  nextEntry(): void {

  }
}

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatError, MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { AdminService } from '@lib/modules/admin';
import { Subscription } from 'rxjs';

export type DataType = 'string' | 'number' | 'array' | 'object'

export interface ModelData {
  key: string;
  value: unknown;
  type: DataType;
}

export interface Foo {
  key: string;
  child: Foo[];
}

export function castTo<T>(): (row: unknown) => T {
  return (row) => row as T
}

@Component({
  selector: 'a4w-admin-component-bar',
  standalone: true,
  imports: [CommonModule, MatError, MatFormField, MatInput, FormsModule, MatFormFieldModule, MatInputModule, MatTabGroup, MatTab, MatIconButton, MatIcon],
  templateUrl: './admin-component-bar.component.html',
  styleUrl: './admin-component-bar.component.scss',
})
export class AdminComponentBarComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  modelData: ModelData[];

  $modelData = castTo<ModelData>();

  list: Foo[] = [
    {key: '1', child: []},
    {key: '1', child: [{key: '1', child: [{key: '1', child: []}, {key: '1', child: []}]}, {key: '1', child: []}]},
    {key: '1', child: [{key: '1', child: []}, {key: '1', child: []}]},
  ]

  constructor(protected adminService: AdminService) { }

  ngOnInit(): void {
    this.subscription = this.adminService.componentData$.subscribe(data => {
      this.modelData = this.buildData(data);
      console.log(this.modelData);
    });
  }

  buildData(data: object): ModelData[] {
    const modelData: ModelData[] = [];
    const keys = Object.keys(data);
    const values = Object.values(data);

    for (let i = 0; i < keys.length; i++) {
      const item: ModelData = {key: keys[i], type: 'string', value: values[i]};
      if (typeof values[i] === 'string') {
        item.type = 'string';
        item.value = values[i];
      } else if (Array.isArray(values[i])) {
        item.type = 'array';
        item.value = this.buildData(values[i]);
      } else if (Number.isFinite(values[i])) {
        item.type = 'number';
        item.value = values[i];
      } else {
        item.type = 'object';
        item.value = this.buildData(values[i]);
      }
      modelData.push(item);
    }
    return modelData;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected readonly Number = Number;
  protected readonly String = String;
}

import { SelectionModel } from '@angular/cdk/collections';
import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { Kratom } from '@shop/pages/shop/store/articles/kratom/kratom.model';

export interface KratomTableData {
  // name: string;
  weight: number;
  price: number;
  kgPrice: number;
  stock: number;
}

@Component({
  selector: 'shop-weight-table',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCheckbox,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './weight-table.component.html',
  styleUrl: './weight-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WeightTableComponent implements OnInit {

  @Input({required: true})
  article: Kratom;

  @Output()
  choiceEvent = new EventEmitter<KratomTableData | null>();

  displayedColumns: string[] = ['select', 'weight', 'price', 'kgPrice', 'stock'];
  dataSource: MatTableDataSource<KratomTableData>
  selection = new SelectionModel<KratomTableData>(true, []);

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.createTableData());
  }

  checkboxLabel(row: KratomTableData): string {
    // console.log('WeightTableComponent checkboxLabel: ',
    // `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.weight}`)
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.weight}`;
  }

  onChangeSelection(row: KratomTableData): void {
    if (this.selection.isSelected(row)) {
      this.selection.clear();
      this.choiceEvent.emit(null);
    } else {
      this.selection.clear();
      this.selection.select(row);
      this.choiceEvent.emit(row);
    }
  }

  private createTableData(): KratomTableData[] {
    const p = this.article.prices;
    const s = this.article.stock;

    return [
      {weight: 10, price: p.price10, kgPrice: p.price10 * 100, stock: s.stock10},
      {weight: 50, price: p.price50, kgPrice: p.price50 * 20, stock: s.stock50},
      {weight: 100, price: p.price100, kgPrice: p.price100 * 10, stock: s.stock100},
      {weight: 250, price: p.price250, kgPrice: p.price250 * 4, stock: s.stock250},
      {weight: 500, price: p.price500, kgPrice: p.price500 * 2, stock: s.stock500},
      {weight: 1000, price: p.price1000, kgPrice: p.price1000, stock: s.stock100},
    ];
  }
}

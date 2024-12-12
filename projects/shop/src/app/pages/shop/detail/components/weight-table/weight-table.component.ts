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
    const data = this.article.data;
    const tableData: KratomTableData[] = [];
    let weight = 0;
    let factor = 0;
    for (const item of data) {
      weight = Number(item.identifier);
      factor = 1000 / weight;
      tableData.push(
        {weight: weight, price: item.price, kgPrice: item.price * factor, stock: item.stock}
      )
    }
    return tableData;
  }
}

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
import { KratomTableData } from '@shop/pages/shop/detail/detail.model';

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
  tableData: KratomTableData[];

  @Output()
  choiceEvent = new EventEmitter<string | null>();

  displayedColumns: string[] = ['select', 'size', 'price', 'kgPrice', 'stock'];
  dataSource: MatTableDataSource<KratomTableData>
  selection = new SelectionModel<KratomTableData>(true, []);

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  checkboxLabel(row: KratomTableData): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.size}`;
  }

  onChangeSelection(row: KratomTableData): void {
    if (this.selection.isSelected(row)) {
      this.selection.clear();
      this.choiceEvent.emit(null);
    } else {
      this.selection.clear();
      this.selection.select(row);
      this.choiceEvent.emit(row.size);
    }
  }

}

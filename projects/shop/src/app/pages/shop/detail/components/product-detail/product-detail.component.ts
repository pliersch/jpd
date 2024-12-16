import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { createOrderPositionDto } from '@shop/pages/shop/cart/store/cart.model';
import { CartStore } from '@shop/pages/shop/cart/store/cart.store';
import { TagChipsComponent } from '@shop/pages/shop/detail/components/tags/tag-chips.component';
import { WeightTableComponent } from '@shop/pages/shop/detail/components/weight-table/weight-table.component';
import { DetailStore } from '@shop/pages/shop/detail/detail.store';
import { NumberInputComponent } from '@shop/pages/shop/detail/number-input/number-input.component';
import { ImageFallbackDirective, StarsComponent } from 'jpd-core';

@Component({
  selector: 'shop-product-detail',
  standalone: true,
  imports: [
    ImageFallbackDirective,
    StarsComponent,
    MatTabGroup,
    MatTab,
    FormsModule,
    MatFormFieldModule,
    NumberInputComponent,
    WeightTableComponent,
    NgOptimizedImage,
    TagChipsComponent,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatButton
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [DetailStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {

  readonly detailStore = inject(DetailStore);
  readonly cartStore = inject(CartStore);

  @ViewChildren(NumberInputComponent)
  quantityInputs!: QueryList<NumberInputComponent>;

  size?: string;
  quantity: number = 0;

  onChangeQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  onSubmit(): void {
    this.cartStore.add(
      createOrderPositionDto(this.detailStore.entityId(), this.quantity, this.size!));
    this.quantity = 0;
    this.quantityInputs.forEach(item => item.clear());
  }

  onSelectSize($event: string | null): void {
    this.size = $event ? $event : '';
  }
}

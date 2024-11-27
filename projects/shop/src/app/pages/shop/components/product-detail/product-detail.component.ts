import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { NumberInputComponent } from '@shop/pages/shop/components/number-input/number-input.component';
import { DetailStore } from '@shop/pages/shop/detail/detail.store';
import { ImageFallbackDirective, StarsComponent } from 'jpd-core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    ImageFallbackDirective,
    StarsComponent,
    MatTabGroup,
    MatTab,
    FormsModule,
    MatFormFieldModule,
    NumberInputComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [DetailStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {

  readonly detailStore = inject(DetailStore);
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Studies } from '../../../interfaces/portfolio.interface';

@Component({
  selector: 'app-studie-item',
  imports: [],
  templateUrl: './studie-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudieItemComponent { 
  study = input<Studies>()
}

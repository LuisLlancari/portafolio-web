import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Experience } from '../../../interfaces/portfolio.interface';

@Component({
  selector: 'app-experiencie-item',
  imports: [],
  templateUrl: './experiencie-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencieItemComponent { 

experiencie = input<Experience>();


}

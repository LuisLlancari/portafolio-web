import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExperiencieItemComponent } from "../../components/experiencie/experiencie-item/experiencie-item.component";
import { portfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experiencie',
  imports: [ExperiencieItemComponent],
  templateUrl: './experience.component.html'
})
export default class ExperiencieComponent { 

  private portfolioService = inject(portfolioService)

  get experiencies() {
    return this.portfolioService.experience();
  }

}

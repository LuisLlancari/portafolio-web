import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectItemComponent } from "../../components/projects/project-item/project-item.component";
import { portfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectItemComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsComponent {

  private portfolioService = inject(portfolioService)

  get Projects(){
    return this.portfolioService.projects();
  }

 }

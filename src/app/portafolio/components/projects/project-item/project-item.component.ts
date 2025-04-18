import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Project } from '../../../interfaces/portfolio.interface';

@Component({
  selector: 'app-project-item',
  imports: [],
  templateUrl: './project-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent {

  project = input<Project>()



  

 }

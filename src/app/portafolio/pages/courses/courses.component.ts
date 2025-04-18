import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseItemComponent } from "../../components/courses/course-item/course-item.component";
import { StudieItemComponent } from "../../components/courses/studie-item/studie-item.component";
import { portfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-courses',
  imports: [CourseItemComponent, StudieItemComponent],
  templateUrl: './courses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CoursesComponent { 

  private portfolioService = inject(portfolioService);

  get estudies() {
    return this.portfolioService.studies();
  }

  get courses() {
    return this.portfolioService.courses();
  }

}

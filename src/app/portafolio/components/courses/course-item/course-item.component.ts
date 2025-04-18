import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Course } from '../../../interfaces/portfolio.interface';

@Component({
  selector: 'app-course-item',
  imports: [],
  templateUrl: './course-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent { 

  course = input<Course>();

}

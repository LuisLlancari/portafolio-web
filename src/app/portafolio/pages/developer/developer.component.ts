import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { portfolioService } from '../../services/portfolio.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Developer } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-developer',
  imports: [FontAwesomeModule],
  templateUrl: './developer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeveloperComponent { 

  GithubIcon = faGithub;
  LinkedinIcon = faLinkedin;
  gmailIcon = faEnvelope;

  private portfolioService = inject(portfolioService)

  get developer() {
    return this.portfolioService.developer();
  }
  

}

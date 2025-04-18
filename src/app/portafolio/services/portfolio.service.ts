import { HttpClient } from '@angular/common/http';
import { inject, Injectable, effect, signal } from '@angular/core';
import { Developer, Project, Experience, Studies, Course, Portfolio} from '../interfaces/portfolio.interface';


@Injectable({providedIn: 'root'})

export class portfolioService {

  private http = inject(HttpClient)

  language = signal<string>("es");

  developer = signal<Developer | undefined>(undefined);
  projects = signal<Project[]>([])
  experience = signal<Experience[]>([])
  studies = signal<Studies[]>([])
  courses = signal<Course[]>([])


  constructor () {
    // vemos que cambie el lenguage
    effect(() => {
      const lang = this.language();
      this.loadPortfolioData(lang)
    });
  }

  loadPortfolioData(lang: string){
    this.http.get<Portfolio>(`data/datos.${lang}.json`).subscribe((resp) => {
      this.developer.set(resp.developer);
      this.projects.set(resp.projects);
      this.experience.set(resp.experience)
      this.studies.set(resp.course.studies)
      this.courses.set(resp.course.course)
      console.log("respuesta de load:")
      console.log(resp)
    })  
  }

}
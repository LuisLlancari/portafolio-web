import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: ()=>
      import('./portafolio/pages/navbar-page/navbar-page.component'),
    children:[
      {
        path:'developer',
        loadComponent: ()=>
          import('./portafolio/pages/developer/developer.component')
      },
      {
        path:'projects',
        loadComponent: ()=>
          import('./portafolio/pages/projects/projects.component')
      },
      {
        path:'experiencie',
        loadComponent: ()=>
          import('./portafolio/pages/experience/experience.component')
      },
      {
        path:'courses',
        loadComponent: ()=>
          import('./portafolio/pages/courses/courses.component')
      },
      {
        path: '**',
        redirectTo: 'developer'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'navbar'
  }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
  },
  {
    path: 'parte',
    loadChildren: () => import('./parte/parte.module').then(m => m.ParteModule)
  },
  {
    path: 'evaluacion',
    loadChildren: () => import('./evaluacion/evaluacion.module').then(m => m.EvaluacionModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

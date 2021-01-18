import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {AlumnosComponent} from "./alumnos/listadoAlumnos/alumnos.component";
import {DetalleAlumnoComponent} from "./alumnos/detalle-alumno/detalle-alumno.component";

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleAlumnoComponent
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

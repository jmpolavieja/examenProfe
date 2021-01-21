import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlumnosComponent} from "./listadoAlumnos/alumnos.component";
import {DetalleAlumnoComponent} from "./detalle-alumno/detalle-alumno.component";

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }

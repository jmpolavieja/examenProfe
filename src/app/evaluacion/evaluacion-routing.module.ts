import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EvaluacionComponent} from "./evaluacion/evaluacion.component";
import {SeleccionComponent} from "./seleccion/seleccion.component";
import {BoletinComponent} from "./boletin/boletin.component";

const routes: Routes = [
  {
    path: "",
    component: EvaluacionComponent
  },
  {
    path: "select/:curso",
    component: SeleccionComponent
  },
  {
    path: "boletin/:id",
    component: BoletinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionRoutingModule { }

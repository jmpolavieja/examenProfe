import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionRoutingModule } from './evaluacion-routing.module';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { BoletinComponent } from './boletin/boletin.component';


@NgModule({
  declarations: [EvaluacionComponent, SeleccionComponent, BoletinComponent],
  imports: [
    CommonModule,
    EvaluacionRoutingModule
  ]
})
export class EvaluacionModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParteMenuComponent} from "./parte-menu/parte-menu.component";
import {DiarioComponent} from "./diario/diario.component";

const routes: Routes = [
  {
    path: '',
    component: ParteMenuComponent
  },
  {
    path: 'diario/:curso',
    component: DiarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParteRoutingModule { }

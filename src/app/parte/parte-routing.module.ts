import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParteMenuComponent} from "./parte-menu/parte-menu.component";

const routes: Routes = [
  {
    path: '',
    component: ParteMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParteRoutingModule { }

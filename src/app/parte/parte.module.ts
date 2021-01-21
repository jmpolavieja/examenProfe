import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParteRoutingModule } from './parte-routing.module';
import { ParteMenuComponent } from './parte-menu/parte-menu.component';


@NgModule({
  declarations: [ParteMenuComponent],
  imports: [
    CommonModule,
    ParteRoutingModule
  ]
})
export class ParteModule { }

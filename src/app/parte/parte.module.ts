import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParteRoutingModule } from './parte-routing.module';
import { ParteMenuComponent } from './parte-menu/parte-menu.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DiarioComponent } from './diario/diario.component';
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [ParteMenuComponent, DiarioComponent],
  imports: [
    CommonModule,
    ParteRoutingModule,
    MatGridListModule,
    MatListModule
  ]
})
export class ParteModule { }

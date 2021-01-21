import { Component, OnInit } from '@angular/core';
import {AlumnosService} from "../../alumnos/alumnos.service";
import {Alumno} from "../../alumnos/alumno";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {

  alumnos: Alumno[];
  curso: string;

  constructor(
    private alumnosService: AlumnosService,
    private ruter: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.curso = this.ruter.snapshot.paramMap.get('curso');
    this.alumnos = this.alumnosService.getAlumnos();
  }

  goBack() {
    this.location.back();
  }

}

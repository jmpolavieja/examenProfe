import {Component, Input, OnInit} from '@angular/core';
import {Alumno} from "../alumno";
import { ActivatedRoute } from "@angular/router";
import { AlumnosService } from "../alumnos.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  alumno: Alumno;
  numero: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService,
    private location: Location
  ) { }

  ngOnInit(): void {

      this.numero = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log(this.numero);
      this.alumno = this.alumnosService.getOneAlumno(this.numero);

  }

  goback(): void {
    this.location.back();
  }
}

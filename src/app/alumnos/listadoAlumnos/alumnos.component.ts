import { Component, OnInit } from '@angular/core';
import {AlumnosService} from "../alumnos.service";
import {Alumno} from "../alumno";

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumno: Alumno;
  listAlumnos: Alumno[];
  displayedColumns: string[] = ['nombre', 'numero', 'Curso', 'repetidor', 'dni' ];


  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.listAlumnos = this.alumnosService.getAlumnos();
  }

}

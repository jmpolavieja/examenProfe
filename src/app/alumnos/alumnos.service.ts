import { Injectable } from '@angular/core';
import { ALUMNOS } from "./alumnos-mock";
import { Alumno } from "./alumno";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  listaAlumnos: Alumno[];

  constructor() {
    this.listaAlumnos = ALUMNOS;
  }

  getAlumnos(): Alumno[] {
    return this.listaAlumnos;
  }

  getOneAlumno(numero: number): Alumno {
    let alumno: Alumno = this.listaAlumnos.find(alumno => alumno.numero == numero);
    console.log("El alumno es", numero);
    return alumno;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class Personas{
  personas: Persona[] ;
  constructor() {
    this.personas = [];
   }

   aniadirPersona(nombre: String, apellidos: String, edad: any, cedula: String) {

    let persona: Persona;

    if (edad === '') {
        edad = 0;
    }
    persona = new Persona(nombre, apellidos, edad, cedula);
    if (persona.esValido()) {
        this.personas.push(persona);
        console.log('Persona añadida');
    }else {
        console.log('Persona no valida');
    }


}

isEmpty() {
    return this.personas.length === 0;
}

}
class Persona {

  nombre: String;
  apellidos: String;
  edad: Number;
  cedula: String;

  constructor(nombre: String, apellidos: String, edad: Number, cedula: String) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.cedula = cedula;
  }

  esValido() {
      if (this.nombre === '' ||
          this.apellidos === '' ||
          this.edad === 0 ||
          this.cedula === '') {
              return false;
      }
      return true;
  }

  nombreCompleto() {
      return this.nombre + ' ' + this.apellidos;
  }

  mostrarInfo() {
      return 'Edad: ' + this.edad + ', Cedula: ' + this.cedula;
  }

}

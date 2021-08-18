import { Component } from "@angular/core";


@Component({
    selector: 'app-agustin',
    templateUrl: 'heroe.component.html',
    //styleUrls: ['listado.component.css']
  })

export class HeroeComponent {

    nombre: string = 'Iron-Man';
    edad: number=45;

    get nombreEnMayusculas():string{
        return this.nombre.toUpperCase()
    }
 
    obtenerNombre():string {
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre():void {
        this.nombre='Spiderman';
    }

    cambiarEdad():void {
        this.edad= 30;
    }
}
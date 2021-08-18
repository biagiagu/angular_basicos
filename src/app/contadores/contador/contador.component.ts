import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
        <h1>Hola Mundo!</h1>
        <h2>{{title}}</h2>
        <h3>La base de incremento es: {{base}}</h3>
        <button (click)="acumular(base)">+{{base}}</button>
        <span> {{numero}} </span>
        <button (click)="acumular(-base)">-{{base}}</button>
    `
})

export class ContadorComponent{
    title = 'Contador App';
    numero:number=10;
    base:number=2;
  
    acumular(valor:number){
      this.numero +=valor;
    }
}
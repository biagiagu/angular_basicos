import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html',
  //styleUrls: ['listado.component.css']
})

export class ListadoComponent {

  heroeEliminado:string='';

  heroes:string[]=[
    'Spiderman',
    'Iron-Man',
    'Capitan America',
    'Patoruzu',
    'Hijitus',
    'Thor',
    'Batman'
  ];

  borrarHeroe(){
    this.heroeEliminado = this.heroes.pop() || '';
    console.log(`Borrando heroe ${this.heroeEliminado}`);
  }

}

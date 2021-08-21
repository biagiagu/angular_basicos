import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contadores/contador/contador.component';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { PruebaAgustinComponent } from './heroes/prueba-agustin/prueba-agustin.component';
import { HeroModule } from './heroes/heroes.modules';
import { ContadoresModule } from './contadores/contadores.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // HeroeComponent,
    // ListadoComponent,
    PruebaAgustinComponent
  ],
  imports: [
    BrowserModule,
    HeroModule,
    ContadoresModule,
    DbzModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

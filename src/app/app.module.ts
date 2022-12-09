import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarImcComponent } from './components/pages/imc/cadastrar-imc/cadastrar-imc.component';
import { ListarImcComponent } from './components/pages/imc/listar-imc/listar-imc.component';
import { AlterarImcComponent } from './components/pages/imc/alterar-imc/alterar-imc.component';
import { CadastrarUsuarioComponent } from './components/pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CadastrarImcComponent,
    ListarImcComponent,
    AlterarImcComponent,
    CadastrarUsuarioComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

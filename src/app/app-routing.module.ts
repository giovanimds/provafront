import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarImcComponent} from "./components/pages/imc/listar-imc/listar-imc.component";
import {CadastrarUsuarioComponent} from "./components/pages/usuario/cadastrar-usuario/cadastrar-usuario.component";
import {CadastrarImcComponent} from "./components/pages/imc/cadastrar-imc/cadastrar-imc.component";
import {AlterarImcComponent} from "./components/pages/imc/alterar-imc/alterar-imc.component";

const routes: Routes = [
  { path:"", component: ListarImcComponent },
  { path:"cadastrar-usuario", component: CadastrarUsuarioComponent },
  { path:"cadastrar-imc", component: CadastrarImcComponent },
  { path:"alterar-imc/:id", component: AlterarImcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

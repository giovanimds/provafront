import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../../../../Model/Usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {
  public usuario!: Usuario;
  constructor(private http:HttpClient, private router: Router) {
  }
  cadastrar(){
    this.http.post<Usuario>("https://localhost:5001/api/usuario/cadastrar", this.usuario).subscribe((usuario) => {
      alert("OK, CONSOLE.TABLE")
      console.table(usuario)
      this.router.navigate(["cadastrar-imc"])
    })
  }
}

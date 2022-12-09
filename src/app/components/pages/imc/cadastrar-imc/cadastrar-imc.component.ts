import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../../../../Model/Usuario";
import {IMC} from "../../../../Model/IMC";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-cadastrar-imc',
  templateUrl: './cadastrar-imc.component.html',
  styleUrls: ['./cadastrar-imc.component.css']
})
export class CadastrarImcComponent implements OnInit{
  public usuarios: Usuario[] = [];
  public usuarioId!: number;
  public altura: number = 0;
  public peso: number = 0;
  public constructor(private http: HttpClient, private router: Router) {
  }
  ngOnInit() {
    this.http.get<Usuario[]>("https://localhost:5001/api/usuario/listar").subscribe((usuarios) => {
      this.usuarios = usuarios
    })

  }

  cadastrar() {
    let imc = {
      altura: this.altura,
      peso: this.peso,
      usuario: {
        usuarioId: this.usuarioId
      }
    }
    this.http.post<IMC>("https://localhost:5001/api/imc/cadastrar", imc).subscribe((imc) => {
      alert("OK, CONSOLE.TABLE")
      console.table(imc)
      this.router.navigate([""])
    })
  }
}

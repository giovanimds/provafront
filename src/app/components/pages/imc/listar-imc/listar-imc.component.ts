import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMC} from "../../../../Model/IMC";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-listar-imc',
  templateUrl: './listar-imc.component.html',
  styleUrls: ['./listar-imc.component.css']
})
export class ListarImcComponent implements OnInit{

  imcs: IMC[] = [];
  public constructor(private http:HttpClient, private router: RouterModule) {
  }
  ngOnInit() {
    this.http.get<IMC[]>("https://localhost:5001/api/imc/listar").subscribe((imcs) => {
      this.imcs = imcs;
    })
  }

}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {IMC} from "../../../../Model/IMC";

@Component({
  selector: 'app-alterar-imc',
  templateUrl: './alterar-imc.component.html',
  styleUrls: ['./alterar-imc.component.css']
})
export class AlterarImcComponent implements OnInit{
  public imc!: IMC;
  public constructor(private http:HttpClient, private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      let { id } = params;
      if( id !== undefined){
        this.http.get<IMC>("https://localhost:5001/api/imc/buscar/"+id).subscribe((imc) => {
          this.imc = imc;
        })
      }
    })
  }

  alterar(){
    this.http.patch<IMC>("https://localhost:5001/api/imc/alterar/", this.imc).subscribe((result) =>{
      console.table(result)
    })
  }
}

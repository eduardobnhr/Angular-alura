import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit{
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }
  constructor(){}

  ngOnInit(): void {

  }
  criarPensamento(){
    alert("Novo pensamento criado")
  }

  cancelarPensamento(){
    alert("pensamento cancelado!")

  }
}

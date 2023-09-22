import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit{
  pensamento = {
    id: '1',
    conteudo: 'aprendendo angular',
    autoria: 'Dev',
    modelo: ''
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

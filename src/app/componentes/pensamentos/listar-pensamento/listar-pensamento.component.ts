import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})

export class ListarPensamentoComponent implements OnInit{
  listaPensamentos = [{
    conteudo: 'Passo informações para componente filho',
    autoria: 'componente pai',
    modelo: 'modelo3'
  },
  {
    conteudo: 'Minha propriedade é decorada com Input()',
    autoria: 'componente filho',
    modelo: 'modelo2'
  }
];

  constructor(){}
  ngOnInit(): void {

  }

}

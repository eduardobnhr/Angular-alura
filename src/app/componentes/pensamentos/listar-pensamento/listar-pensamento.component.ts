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
  },
  {
    conteudo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati quisquam possimus ex architecto nemo laudantium corrupti iste, eaque tempore quo autem sunt hic sit voluptatem facere eveniet temporibus unde?',
    autoria: '',
    modelo: 'modelo1'
  },
];

  constructor(){}
  ngOnInit(): void {

  }

}

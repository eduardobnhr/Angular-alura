import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';



@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.css']
})
export class ExcluirPensamentosComponent  implements OnInit{
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''

  }
  constructor(
    private service: PensamentoService,
    private Router: Router,
    private route: ActivatedRoute
    ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })

  }
  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.Router.navigate(['/listarPensamento'])
      })
    }
  }
  cancelar(){
    this.Router.navigate(['/listarPensamento'])
  }

}

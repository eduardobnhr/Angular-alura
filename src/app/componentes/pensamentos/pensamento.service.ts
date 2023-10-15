import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {


  private readonly API = 'http://localhost:3000/pensamento'

  constructor(private http: HttpClient) { }


  listar() : Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(Pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, Pensamento)
  }
  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento>  {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class CadastroServicesService {
  private url: string = "http://localhost:8000/";
  constructor(private httpClient: HttpClient) { }

  public cadastrarUsuario(usuario: Usuarios): Observable<Usuarios>{
    return this.httpClient.post<Usuarios>(`${this.url}cadastro-cliente`, usuario).pipe(
      map(res => res))
  }

  public buscaUsuarios(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}verCliente`).pipe(
      map(res => res))
  }

  public mediaIdade(): Observable<any>{ 
    return this.httpClient.get<any>(`${this.url}media-idade`).pipe(
      map(res => res)
    )
  }

  public ultimosPedidos(): Observable<any>{ 
    return this.httpClient.get<any>(`${this.url}ultimos-clientes`).pipe(
      map(res => res)
    )
  }

  public buscaTotalUsuarios(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}todosUsuarios`).pipe(
      map(res => res))
  }

  public sexoMasculino(): Observable<any>{ 
    return this.httpClient.get<number>(`${this.url}sexoMasculino`).pipe( 
      map(res => res)
    )
  }

  public sexoFeminino(): Observable<any>{ 
    return this.httpClient.get<any>(`${this.url}sexoFeminino`).pipe( 
      map(res => res)
    )
  }




}

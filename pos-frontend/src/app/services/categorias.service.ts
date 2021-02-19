import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Categorias } from '../modelo/Categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  obtenerCategorias(): Observable<Categorias[]>{
    return this.http.get<Categorias[]>('/posapirest/obtenerCategorias');
  }

  guardarCategoria(categoria:Categorias): Observable<Categorias> {
    return this.http.post<Categorias>('/posapirest/guardarCategoria', categoria);
  }

  borrarCategoria(categoria:Categorias): Observable<{}> {
    return this.http.delete(`/posapirest/borrarCategoria/${categoria.id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../modelo/Productos';
import { TopProductos } from '../modelo/TopProductos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Productos[]>{
    return this.http.get<Productos[]>('/posapirest/obtenerProductos');
  }

  guardarProducto(producto:Productos): Observable<Productos> {
    return this.http.post<Productos>('/posapirest/guardarProducto', producto);
  }

  borrarProducto(producto:Productos): Observable<{}> {
    return this.http.delete(`/posapirest/borrarProducto/${producto.id}`);
  }

  obtenerTopProductos(): Observable<TopProductos[]> {
    return this.http.get<TopProductos[]>("/posapirest/obtenerTopProductos");
  }
}

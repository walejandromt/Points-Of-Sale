import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ventas } from '../modelo/Ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  obtenerVentas(): Observable<Ventas[]> {
    return this.http.get<Ventas[]>('/posapirest/obtenerVentas');
  }

  obtenerVentasAgrupadasPorClave(): Observable<Ventas[]> {
    return this.http.get<Ventas[]>('/posapirest/obtenerVentasAgrupadasPorClave');
  }

  obtenerVentasPorClave(clave: String): Observable<Ventas[]> {
    return this.http.get<Ventas[]>(`/posapirest/obtenerVentasPorClave/${clave}`);
  }

  guardarVenta(ventas:Ventas): Observable<Ventas> {
    return this.http.post<Ventas>('/posapirest/guardarVenta', ventas);
  }
  
}

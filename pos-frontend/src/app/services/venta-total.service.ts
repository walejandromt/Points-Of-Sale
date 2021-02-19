import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ventas } from '../modelo/Ventas';
import { VentasTotalesModelo } from '../modelo/VentasTotalesModelo';
import { VentaTotal } from '../modelo/VentaTotal';

@Injectable({
  providedIn: 'root'
})
export class VentaTotalService {

  constructor(private http: HttpClient) { }

  guardarVentas(ventasTotalesModelo: VentasTotalesModelo): Observable<Ventas[]> {
    return this.http.post<Ventas[]>('/posapirest/guardarVentas', ventasTotalesModelo);
  }

  obtenerVentasTotales(): Observable<VentaTotal[]> {
    return this.http.get<VentaTotal[]>('/posapirest/obtenerVentasTotales');
  }

  obtenerVentasTotalAgrupadasPorClave(): Observable<VentaTotal[]> {
    return this.http.get<VentaTotal[]>('/posapirest/obtenerVentasTotalAgrupadasPorClave');
  }

  obtenerVentasPorFecha(creacion: String): Observable<VentaTotal[]> {
    return this.http.get<VentaTotal[]>(`/posapirest/obtenerVentasPorFecha/${creacion}`);
  }

  obtenerVentasHoy(): Observable<VentaTotal[]> {
    return this.http.get<VentaTotal[]>("/posapirest/obtenerVentasHoy");
  }

  obtenerVentasAyer(): Observable<VentaTotal[]> {
    return this.http.get<VentaTotal[]>("/posapirest/obtenerVentasAyer");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VentaAdicional } from '../modelo/VentaAdicional';

@Injectable({
  providedIn: 'root'
})
export class VentaAdicionalService {

  constructor(private http: HttpClient) { }

  obtenerVentasAdicionalPorClave(clave: String): Observable<VentaAdicional[]> {
    return this.http.get<VentaAdicional[]>(`/posapirest/obtenerVentasAdicionalPorClave/${clave}`);
  }
}

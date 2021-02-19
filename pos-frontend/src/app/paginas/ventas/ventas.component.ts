import { Component, OnInit } from '@angular/core';

import { VentasService } from '../../services/ventas.service'
import { Ventas } from '../../modelo/Ventas';
import { Productos } from '../../modelo/Productos';
import { VentaTotalService } from '../../services/venta-total.service';
import { VentaTotal } from '../../modelo/VentaTotal';
import { VentaAdicional } from '../../modelo/VentaAdicional';
import { VentaAdicionalService } from '../../services/venta-adicional.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas: VentaTotal[] = [];
  ventasDetalle: Ventas[] = [];
  ventasDetalleAdicional: VentaAdicional[] = [];
  producto: Productos = {
    clave: "", codigoQr: "", creacion: "", descripcion : "",
    estatus: "", id: NaN, idCategoria: NaN, nombre: "", nombreImagen: "", precio: NaN, precioLista: NaN, stock : NaN};
  venta: Ventas = {
    cantidad: NaN, clave: "", creacion: "", id: NaN, idProductos: NaN, producto: {
      clave: "", codigoQr: "", creacion: "", descripcion: "",
      estatus: "", id: NaN, idCategoria: NaN, nombre: "", nombreImagen: "", precio: NaN, precioLista: NaN, stock: NaN
    }
  };
  
  constructor(private ventasService: VentasService, private ventaTotalService: VentaTotalService, private ventaAdicionalService: VentaAdicionalService) { }

  ngOnInit(): void {
    this.ventaTotalService.obtenerVentasTotalAgrupadasPorClave().subscribe((data: VentaTotal[]) => {
      this.ventas=data;
    });
  }

  guardarVenta(): void {
    this.ventasService.guardarVenta(this.venta).subscribe((data:Ventas) => {
      alert(`Se agrego venta ${this.venta.idProductos} !!!`);
      this.ngOnInit();
    });
  }

  obtenerDetallesVentas(venta: VentaTotal): void {
    this.ventasService.obtenerVentasPorClave(venta.clave).subscribe((data: Ventas[]) => {
      this.ventasDetalle=data;
    });

    this.ventaAdicionalService.obtenerVentasAdicionalPorClave(venta.clave).subscribe((data: VentaAdicional[]) => {
      this.ventasDetalleAdicional = data;
    });
    
  }

  setProducto(venta: Ventas): void {
    this.producto = venta.producto;
  }

  setProductoAdicional(venta: VentaAdicional): void {
    this.limpiarProducto();
    this.producto.clave = venta.clave;
    this.producto.creacion = venta.creacion;
    this.producto.precio = venta.precio;
    this.producto.nombre = venta.nombre;
  }

  limpiarProducto(): void {
    this.producto = {
      clave: "", codigoQr: "", creacion: "", descripcion : "",
      estatus: "", id: NaN, idCategoria: NaN, nombre: "", nombreImagen: "", precio: NaN, precioLista: NaN, stock : NaN};
  }

}

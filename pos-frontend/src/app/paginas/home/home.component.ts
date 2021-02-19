import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { ProductosService } from '../../services/productos.service'
import { Productos } from '../../modelo/Productos';
import { VentaTotal } from '../../modelo/VentaTotal';
import { Ventas } from '../../modelo/Ventas';
import { VentasService } from '../../services/ventas.service';
import { ConstantesService } from '../../services/constantes.service';
import { NavigationEnd, Router } from '@angular/router';
import { VentaAdicional } from '../../modelo/VentaAdicional';
import { VentasTotalesModelo } from '../../modelo/VentasTotalesModelo';
import { VentaTotalService } from '../../services/venta-total.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: Productos[] = [];
  carrito: Ventas[] = [];
  carritoAdicional: VentaAdicional[] = [];
  ventaTotal: VentaTotal = { id: NaN, clave: "", subTotal: 0, iva: 0, total: 0, pagaCon: null, tipo: "", registro: "", creacion: "" };
  claveSelected: string = "";
  porcentajeDescuento: number = 0;
  cambio: number = 0;
  tiposPago: string[] = ['EFECTIVO', 'TARJETA DE DEBITO', 'TARJETA DE CREDITO'];
  mySubscription: any;
  cantidad: number | null = null;
  tipoCantidad: number | null = null;
  nombreCantidad: string | null = null;

  constructor(private productosService: ProductosService, private ventasService: VentasService, public constantesService: ConstantesService, private router: Router, private ventaTotalService: VentaTotalService) { }

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe((data: Productos[]) => {
      this.productos = data;
    });

    this.ventaTotalService.obtenerVentasHoy().subscribe((data: VentaTotal[]) => {
      this.constantesService.ventasHoy = 0;
      for (let v of data) {
        this.constantesService.ventasHoy = this.constantesService.ventasHoy + v.total;
      }
    });

    this.ventaTotalService.obtenerVentasAyer().subscribe((data: VentaTotal[]) => {
      this.constantesService.ventasAyer = 0;
      for (let v of data) {
        this.constantesService.ventasAyer = this.constantesService.ventasAyer + v.total;
      }
    });
  }

  agregar(): void {
    let encontrado: boolean = false;
    for (let p of this.productos) {
      if (p.clave == this.claveSelected) {
        this.agregarProductoAlCarrito(p);
        encontrado = true;
      }
    }

    if (!encontrado) {
      alert("Producto no encontrado");
    }

    this.claveSelected = "";
  }

  agregarProducto(producto: Productos): void {
    this.agregarProductoAlCarrito(producto);
    this.claveSelected = "";
  }

  eliminarProducto(ventas: Ventas): void {
    this.carrito = this.carrito.filter(obj => obj.producto.clave !== ventas.producto.clave);

    //Actualizar Venta Total
    this.actualizarVentaTotal();
  }

  restarProducto(ventas: Ventas): void {
    ventas.cantidad = ventas.cantidad - 1;

    if (ventas.cantidad <= 0) {
      this.eliminarProducto(ventas);
    }

    //Actualizar Venta Total
    this.actualizarVentaTotal();
  }


  agregarProductoAdicional(nombre: string, precio: string): void {
    let producto: VentaAdicional = {
      id: NaN, clave: "", nombre: nombre, precio: +precio, cantidad: 1, creacion: ""
    };
    //Agregar venta adicional al carrito de adicional
    this.agregarVentaAdicionalAlCarrito(producto);
    //this.claveSelected = "";
  }

  eliminarProductoAdicional(ventas: VentaAdicional): void {
    this.carritoAdicional = this.carritoAdicional.filter(obj => obj.nombre !== ventas.nombre);

    //Actualizar Venta Total
    this.actualizarVentaTotal();
  }

  restarProductoAdicional(ventas: VentaAdicional): void {
    ventas.cantidad = ventas.cantidad - 1;

    if (ventas.cantidad <= 0) {
      this.eliminarProductoAdicional(ventas);
    }

    //Actualizar Venta Total
    this.actualizarVentaTotal();
  }

  sumarProductoAdicional(ventas: VentaAdicional): void {
    ventas.cantidad = ventas.cantidad + 1;

    //Actualizar Venta Total
    this.actualizarVentaTotal();
  }

  sumarProducto(ventas: Ventas): void {
    ventas.cantidad = ventas.cantidad + 1;

    //Actualizar Venta Total
    this.actualizarVentaTotal();
  }

  agregarProductoAlCarrito(productos: Productos): void {
    let yaExiste:boolean = false;

    for (let v of this.carrito) {
      if (v.producto.clave == productos.clave) {
        v.cantidad = v.cantidad + 1;
        yaExiste = true;
      }
    }

    if (!yaExiste) {
      this.carrito.push({
        cantidad: 1, clave: "", creacion: "", id: NaN, idProductos: productos.id, producto: productos
      });
    }

    //Actualizar Venta Total
    this.actualizarVentaTotal();
  }

  agregarVentaAdicionalAlCarrito(ventaAdicional: VentaAdicional): void {
    let yaExiste: boolean = false;

    for (let v of this.carritoAdicional) {
      if (v.nombre == ventaAdicional.nombre) {
        v.cantidad = v.cantidad + 1;
        yaExiste = true;
      }
    }

    if (!yaExiste) {
      this.carritoAdicional.push(ventaAdicional);
    }

    //Actualizar Venta Total
    this.actualizarVentaTotal();
  }

  actualizarVentaTotal(): void {
    this.ventaTotal.subTotal = 0;
    for (let v of this.carrito) {
      this.ventaTotal.subTotal = this.ventaTotal.subTotal + (v.producto.precio * v.cantidad);
    }

    for (let v of this.carritoAdicional) {
      this.ventaTotal.subTotal = this.ventaTotal.subTotal + (v.precio * v.cantidad);
    }

    this.ventaTotal.iva = (this.porcentajeDescuento * this.ventaTotal.subTotal) / 100;

    this.ventaTotal.total = this.ventaTotal.subTotal + this.ventaTotal.iva;
  }

  calcularCambio(): void {
    this.cambio = this.ventaTotal.pagaCon ? this.ventaTotal.pagaCon - this.ventaTotal.total : 0;
  }

  guardarVenta(): void {
    if (this.ventaTotal.tipo == null || this.ventaTotal.tipo == "") {
      alert("Selecciona un tipo de pago");
      return;
    }

    let ventasTotalesModelo: VentasTotalesModelo = {
      ventas: this.carrito, ventasAdicional: this.carritoAdicional, ventaTotal: this.ventaTotal};

    this.ventaTotalService.guardarVentas(ventasTotalesModelo).subscribe(() => {
      () => {
        alert("ERROR!!! No pudimos guardar las ventas algo salio mal");
      }
    });

    this.limpiarTodo();
    this.ngOnInit();
    this.recargarPagina();
  }


  limpiarTodo(): void {
    this.productos = [];
    this.carrito = [];
    this.carritoAdicional = [];
    this.ventaTotal = { id: NaN, clave: "", subTotal: 0, iva: 0, total: 0, pagaCon: null, tipo: "", registro: "", creacion: "" };
    this.claveSelected = "";
    this.porcentajeDescuento = 0;
    this.cambio = 0;
  }

  recargarPagina(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    }); 
  }

  actualizarCantidad(carrito: Ventas): void {
    this.nombreCantidad = "" + carrito.producto.clave;
    this.cantidad = carrito.cantidad;
    this.tipoCantidad = 1;
  }

  actualizarCantidadAdicional(carritoAdicional: VentaAdicional): void {
    this.nombreCantidad = carritoAdicional.nombre;
    this.cantidad = carritoAdicional.cantidad;
    this.tipoCantidad = 2;
  }

  actualizarCantidadCarrito(): void {
    if (this.tipoCantidad == 1) {
      for (let v of this.carrito) {
        if (("" + v.producto.clave) == this.nombreCantidad) {
          v.cantidad = this.cantidad ? this.cantidad : v.cantidad;
        }
      }
    }

    if (this.tipoCantidad == 2) {
      for (let v of this.carritoAdicional) {
        if (v.nombre == this.nombreCantidad) {
          v.cantidad = this.cantidad ? this.cantidad : v.cantidad;
        }
      }
    }

    //Actualizar Venta Total
    this.actualizarVentaTotal();
  }
}

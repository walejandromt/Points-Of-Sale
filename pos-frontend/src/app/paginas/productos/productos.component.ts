import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service'
import { Productos } from '../../modelo/Productos';
import { CategoriasService } from '../../services/categorias.service'
import { Categorias } from '../../modelo/Categorias';

// This lets me use jquery
declare var bootstrap: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Productos[] = [];
  producto:Productos = {clave : "", codigoQr : "", creacion : "", descripcion : "",
    estatus: "", id: NaN, idCategoria: NaN, nombre: "", nombreImagen: "", precio: NaN, precioLista: NaN, stock : NaN};
  categorias: Categorias[] = [];
  claveSelected: string = "";

  constructor(private productosService:ProductosService, private categoriasService:CategoriasService) { }

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe((data:Productos[]) => {
      this.productos=data;
    });

    this.categoriasService.obtenerCategorias().subscribe((data:Categorias[]) => {
      this.categorias=data;
    });
  }

  guardarProducto(): void {
    this.producto.estatus = 'DESACTIVADO';
    this.productosService.guardarProducto(this.producto).subscribe((data:Productos) => {
      alert(`Se agrego producto ${this.producto.nombre} !!!`);
      this.ngOnInit();
    });
  }

  borrarProducto(producto:Productos): void {
    this.productosService.borrarProducto(producto).subscribe((data) => {
      alert(`Se borro producto ${producto.nombre} !!!`);
      this.ngOnInit();
    });
  }

  setProducto(producto:Productos): void {
    this.producto = producto;
  }

  limpiarProducto(): void {
    this.producto = {clave : "", codigoQr : "", creacion : "", descripcion : "",
      estatus: "", id: NaN, idCategoria: NaN, nombre: "", nombreImagen: "", precio: NaN, precioLista: NaN, stock : NaN};
  }

  agregar(): void {
    let modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));
    let encontrado: boolean = false;
    for (let p of this.productos) {
      if (p.clave == this.claveSelected) {
        this.producto = p;
        encontrado = true;
      }
    }

    if (!encontrado) {
      alert("Producto no encontrado");
      this.limpiarProducto();
      
    }

    if (encontrado) {
      modalProducto.show();
    }

    this.claveSelected = "";
  }

}

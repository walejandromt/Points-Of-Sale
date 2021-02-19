import { Component, OnInit } from '@angular/core';

import { CategoriasService } from '../../services/categorias.service'
import { Categorias } from '../../modelo/Categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:Categorias[] = [];
  categoria: Categorias = { id: NaN, nombre: "", descripcion: "", creacion: ""};

  constructor(private categoriasService:CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias().subscribe((data:Categorias[]) => {
      this.categorias=data;
    });
  }

  guardarCategoria(): void {
    this.categoriasService.guardarCategoria(this.categoria).subscribe((data:Categorias) => {
      alert("Se agrego la categoria nueva... !!!");
      this.ngOnInit();
    });
  }

  borrarCategoria(categoria:Categorias): void {
    this.categoriasService.borrarCategoria(categoria).subscribe((data) => {
      alert(`Se borro la categoria nueva... !!! ${categoria.nombre}`);
      this.ngOnInit();
    });
  }

  setCategoria(categoria:Categorias): void {
    this.categoria = categoria;
  }

  limpiarCategoria(): void {
    this.categoria = {id:NaN, nombre:"", descripcion:"", creacion:""};
  }

}

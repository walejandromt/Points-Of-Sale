import { Component, OnInit } from '@angular/core';
import { TopProductos } from '../../modelo/TopProductos';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-top-productos',
  templateUrl: './top-productos.component.html',
  styleUrls: ['./top-productos.component.css']
})
export class TopProductosComponent implements OnInit {

  topProductos: TopProductos[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.obtenerTopProductos().subscribe((data: TopProductos[]) => {
      this.topProductos = data;
    });
  }

}

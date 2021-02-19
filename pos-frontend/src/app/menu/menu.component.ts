import { Component, OnInit } from '@angular/core';
import { VentaTotal } from '../modelo/VentaTotal';
import { ConstantesService } from '../services/constantes.service';
import { VentaTotalService } from '../services/venta-total.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  id: any = 1;
  spinner: boolean = false;

  constructor(public constantesService: ConstantesService, private ventaTotalService: VentaTotalService) { }

  ngOnInit(): void {
    let url: string = location.pathname;
    switch (url) {
      case "/home": {
        this.id = 1;
        break;
      }
      case "/categorias": {
        this.id = 2;
        break;
      }
      case "/productos": {
        this.id = 3;
        break;
      }
      case "/ventas": {
        this.id = 4;
        break;
      }
      default: {
        this.id = 1;
        break;
      }
    } 
  }

  addClass(id: any) {
    this.id = id;
  }

  actualizar() {
    this.spinner = true;
    this.ventaTotalService.obtenerVentasHoy().subscribe((data: VentaTotal[]) => {
      this.constantesService.ventasHoy = 0;
      for (let v of data) {
        this.constantesService.ventasHoy = this.constantesService.ventasHoy + v.total;
      }

      this.spinner = false;
    });
  }

}

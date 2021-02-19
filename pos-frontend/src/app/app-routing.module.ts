import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { VentasComponent } from './paginas/ventas/ventas.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { TopProductosComponent } from './paginas/top-productos/top-productos.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'categorias', component: CategoriasComponent},
{path: 'productos', component: ProductosComponent},
  { path: 'ventas', component: VentasComponent },
  { path: 'topProductos', component: TopProductosComponent },
{path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

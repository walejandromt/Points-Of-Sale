import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './paginas/home/home.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { VentasComponent } from './paginas/ventas/ventas.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { TopProductosComponent } from './paginas/top-productos/top-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProductosComponent,
    VentasComponent,
    CategoriasComponent,
    TopProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

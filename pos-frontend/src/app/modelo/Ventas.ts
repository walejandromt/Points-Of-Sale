import { Productos } from './Productos';

export interface Ventas {
  cantidad : number;
  clave : String;
  creacion: String;
  id : number;
  idProductos : number;
  producto : Productos;
}

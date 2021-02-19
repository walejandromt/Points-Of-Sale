export interface VentaTotal {
  id: number;
  clave: String;
  subTotal: number;
  iva: number;
  total: number;
  pagaCon: number | null;
  tipo: String;
  registro: String;
  creacion: String;
}

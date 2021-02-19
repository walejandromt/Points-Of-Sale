import { VentaAdicional } from './VentaAdicional';
import { Ventas } from './Ventas';
import { VentaTotal } from './VentaTotal';

export interface VentasTotalesModelo {
  ventas: Ventas[];
  ventasAdicional: VentaAdicional[];
  ventaTotal: VentaTotal;
}

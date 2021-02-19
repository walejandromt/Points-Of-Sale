import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {
  ventasHoy: number = 0;
  ventasAyer: number = 0;

  constructor() { }
}

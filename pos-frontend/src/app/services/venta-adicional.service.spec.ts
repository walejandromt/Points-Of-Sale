import { TestBed } from '@angular/core/testing';

import { VentaAdicionalService } from './venta-adicional.service';

describe('VentaAdicionalService', () => {
  let service: VentaAdicionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaAdicionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

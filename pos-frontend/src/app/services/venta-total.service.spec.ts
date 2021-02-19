import { TestBed } from '@angular/core/testing';

import { VentaTotalService } from './venta-total.service';

describe('VentaTotalService', () => {
  let service: VentaTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

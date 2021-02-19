package com.punto.de.venta.api.rest.services;

import java.util.List;

import com.punto.de.venta.api.rest.entity.VentasEntity;
import com.punto.de.venta.api.rest.modelo.VentasTotalesModelo;

public interface VentasService {
	
	List<VentasEntity> guardarVentas(VentasTotalesModelo entrada);
}

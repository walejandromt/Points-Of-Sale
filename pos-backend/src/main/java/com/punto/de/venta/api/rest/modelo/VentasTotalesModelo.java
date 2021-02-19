package com.punto.de.venta.api.rest.modelo;

import java.io.Serializable;
import java.util.List;

import com.punto.de.venta.api.rest.entity.VentaAdicionalEntity;
import com.punto.de.venta.api.rest.entity.VentaTotalEntity;
import com.punto.de.venta.api.rest.entity.VentasEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class VentasTotalesModelo implements Serializable {
	/**
	 * Serial
	 */
	private static final long serialVersionUID = -4770016295814596927L;

	List<VentasEntity> ventas;

	List<VentaAdicionalEntity> ventasAdicional;

	VentaTotalEntity ventaTotal;

}

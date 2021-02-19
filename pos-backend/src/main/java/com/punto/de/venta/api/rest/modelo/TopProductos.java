package com.punto.de.venta.api.rest.modelo;

import java.io.Serializable;

import com.punto.de.venta.api.rest.entity.ProductosEntity;

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
public class TopProductos implements Serializable {
	/**
	 * Serial
	 */
	private static final long serialVersionUID = 5797781948744046087L;

	private Long cantidad;

	private ProductosEntity producto;

}

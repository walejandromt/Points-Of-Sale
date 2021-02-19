package com.punto.de.venta.api.rest.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
@Entity
@Table(name = "pos_venta_adicional")
public class VentaAdicionalEntity {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "clave")
	private String clave;

	@Column(name = "nombre")
	private String nombre;

	@Column(name = "precio")
	private Float precio;

	@Column(name = "cantidad")
	private Integer cantidad;

	@Column(name = "creacion")
	private String creacion;
}

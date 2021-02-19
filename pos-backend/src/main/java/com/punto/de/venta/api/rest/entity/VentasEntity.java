package com.punto.de.venta.api.rest.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "pos_ventas")
public class VentasEntity implements Serializable {

	/**
	 * Serial
	 */
	private static final long serialVersionUID = 4798838893675507837L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "clave")
	private String clave;

	@Column(name = "id_productos")
	private Integer idProductos;

	@ManyToOne
	@JoinColumn(name = "id_productos", insertable = false, updatable = false)
	private ProductosEntity producto;

	@Column(name = "cantidad")
	private Integer cantidad;

	@Column(name = "creacion")
	private String creacion;

}

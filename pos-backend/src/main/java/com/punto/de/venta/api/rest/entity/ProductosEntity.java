package com.punto.de.venta.api.rest.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.punto.de.venta.api.rest.enums.ProductosStatusEnum;

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
@Table(name = "pos_productos")
public class ProductosEntity implements Serializable {
	/**
	 * Serial
	 */
	private static final long serialVersionUID = -5626243876145064241L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "nombre")
	private String nombre;

	@Column(name = "clave")
	private String clave;

	@Column(name = "codigo_qr")
	private String codigoQr;

	@Column(name = "nombre_imagen")
	private String nombreImagen;

	@Column(name = "descripcion")
	private String descripcion;

	@Column(name = "stock")
	private Integer stock;

	@Column(name = "precio")
	private Double precio;

	@Column(name = "precio_lista")
	private Double precioLista;
	
	@Column(name = "id_categoria")
	private Integer idCategoria;

	@Enumerated(EnumType.STRING)
	@Column(name = "estatus", columnDefinition = "ENUM('ACTIVO', 'DESACTIVADO', 'AGOTADO')")
	private ProductosStatusEnum estatus;

	@Column(name = "creacion")
	private String creacion;

}

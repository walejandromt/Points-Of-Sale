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

import com.punto.de.venta.api.rest.enums.VentasTipoEnum;

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
@Table(name = "pos_venta_total")
public class VentaTotalEntity implements Serializable {

	/**
	 * Serial
	 */
	private static final long serialVersionUID = -7865510613189535044L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "clave")
	private String clave;

	@Column(name = "sub_total")
	private Double subTotal;

	@Column(name = "iva")
	private Double iva;

	@Column(name = "total")
	private Double total;
	
	@Column(name = "paga_con")
	private Double pagaCon;

	@Enumerated(EnumType.STRING)
	@Column(name = "tipo", columnDefinition = "ENUM('EFECTIVO', 'CREDITO', 'DEBITO', 'PRESTAMO')")
	private VentasTipoEnum tipo;

	@Column(name = "registro")
	private String registro;

	@Column(name = "creacion")
	private String creacion;

}

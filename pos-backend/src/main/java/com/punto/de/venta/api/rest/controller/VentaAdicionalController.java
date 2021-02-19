package com.punto.de.venta.api.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.punto.de.venta.api.rest.entity.VentaAdicionalEntity;
import com.punto.de.venta.api.rest.repository.VentaAdicionalRepository;

import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
public class VentaAdicionalController {

	@Autowired
	private VentaAdicionalRepository ventaAdicionalRepository;

	@GetMapping("/obtenerVentasAdicionalPorClave/{clave}")
	public List<VentaAdicionalEntity> obtenerVentasAdicionalPorClave(@PathVariable String clave) {
		log.info(">>> Consulta obtenerVentasAdicionalPorClave {}", clave);
		return ventaAdicionalRepository.findByClave(clave).get();
	}
}

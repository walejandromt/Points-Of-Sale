package com.punto.de.venta.api.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.punto.de.venta.api.rest.entity.VentasEntity;
import com.punto.de.venta.api.rest.repository.VentasRepository;

import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
public class VentasController {

	@Autowired
	private VentasRepository ventasRepository;

	@GetMapping("/obtenerVentas")
	public List<VentasEntity> obtenerVentas() {
		log.info(">>> Consulta obtenerVentas");
		return ventasRepository.findAll();
	}

	@GetMapping("/obtenerVentasAgrupadasPorClave")
	public List<VentasEntity> obtenerVentasAgrupadasPorClave() {
		log.info(">>> Consulta obtenerVentas");
		return ventasRepository.findAllGroupByClave().get();
	}

	@GetMapping("/obtenerVentasPorClave/{clave}")
	public List<VentasEntity> obtenerVentasPorClave(@PathVariable String clave) {
		log.info(">>> Consulta obtenerVentasPorClave {}", clave);
		return ventasRepository.findByClave(clave).get();
	}

	@PostMapping("/guardarVenta")
	public VentasEntity guardarVenta(@RequestBody VentasEntity entity) {
		return ventasRepository.save(entity);
	}
}

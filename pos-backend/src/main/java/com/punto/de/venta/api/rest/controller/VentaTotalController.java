package com.punto.de.venta.api.rest.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.punto.de.venta.api.rest.entity.VentaTotalEntity;
import com.punto.de.venta.api.rest.entity.VentasEntity;
import com.punto.de.venta.api.rest.modelo.VentasTotalesModelo;
import com.punto.de.venta.api.rest.repository.VentaTotalRepository;
import com.punto.de.venta.api.rest.services.VentasService;

import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
public class VentaTotalController {

	@Autowired
	private VentaTotalRepository ventaTotalRepository;

	@Autowired
	private VentasService ventasService;

	@PostMapping("/guardarVentas")
	public List<VentasEntity> guardarVentas(@RequestBody VentasTotalesModelo entrada) {
		return ventasService.guardarVentas(entrada);
	}

	@GetMapping("/obtenerVentasTotales")
	public List<VentaTotalEntity> obtenerVentas() {
		log.info(">>> Consulta obtenerVentas");
		return ventaTotalRepository.findAll();
	}

	@GetMapping("/obtenerVentasTotalAgrupadasPorClave")
	public List<VentaTotalEntity> obtenerVentasAgrupadasPorClave() {
		log.info(">>> Consulta obtenerVentas");
		return ventaTotalRepository.findAllGroupByClave().get();
	}

	@GetMapping("/obtenerVentasPorFecha/{creacion}")
	public List<VentaTotalEntity> obtenerVentasPorFecha(
			@DateTimeFormat(iso = ISO.DATE) @PathVariable LocalDate creacion) {
		log.info(">>> Consulta obtenerVentasPorFecha {}", creacion);
		return ventaTotalRepository.findByRegistro(creacion.toString()).get();
	}

	@GetMapping("/obtenerVentasHoy")
	public List<VentaTotalEntity> obtenerVentasHoy() {
		return ventaTotalRepository.findByRegistro(LocalDate.now().toString()).get();
	}

	@GetMapping("/obtenerVentasAyer")
	public List<VentaTotalEntity> obtenerVentasAyer() {
		return ventaTotalRepository.findByRegistro(LocalDate.now().minusDays(1).toString()).get();
	}
}

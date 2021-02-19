package com.punto.de.venta.api.rest.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.punto.de.venta.api.rest.entity.ProductosEntity;
import com.punto.de.venta.api.rest.enums.ProductosStatusEnum;
import com.punto.de.venta.api.rest.modelo.TopProductos;
import com.punto.de.venta.api.rest.repository.ProductosRepository;

import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
public class ProductosController {

	@Autowired
	private ProductosRepository productosRepository;

	@GetMapping("/obtenerProductos")
	public List<ProductosEntity> obtenerProductos() {
		log.info(">>> Consulta obtenerProductos");
		return productosRepository.findAll();
	}

	@GetMapping("/obtenerProductoPorClave/{clave}")
	public ProductosEntity obtenerProductoPorClave(@PathVariable String clave) {
		log.info(">>> Consulta obtenerProductoPorClave");
		return productosRepository.findByClave(clave).get();
	}

	@GetMapping("/obtenerProductoPorId/{id}")
	public ProductosEntity obtenerProductoPorId(@PathVariable Integer id) {
		log.info(">>> Consulta obtenerProductoPorClave");
		return productosRepository.findById(id).get();
	}

	@PostMapping("/guardarProducto")
	public ProductosEntity guardarProducto(@RequestBody ProductosEntity entity) {
		log.info(">>> Consulta guardarProducto");
		entity.setCreacion(LocalDateTime.now().toString());

		ProductosStatusEnum estatus = ProductosStatusEnum.ACTIVO;
		if (entity.getStock() == null || entity.getStock() <= 0) {
			estatus = ProductosStatusEnum.AGOTADO;
		}

		entity.setEstatus(estatus);
		return productosRepository.save(entity);
	}

	@DeleteMapping("/borrarProducto/{id}")
	public void borrarProducto(@PathVariable Integer id) {
		log.info(">>> Consulta borrarProducto id {}", id);
		productosRepository.deleteById(id);
	}

	@GetMapping("/obtenerTopProductos")
	public List<TopProductos> obtenerTopProductos() {
		log.info(">>> Consulta obtenerTopProductos");
		return productosRepository.obtenerTopProductos().get();
	}

}

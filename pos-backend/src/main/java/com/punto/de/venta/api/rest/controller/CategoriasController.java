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

import com.punto.de.venta.api.rest.entity.CategoriasEntity;
import com.punto.de.venta.api.rest.repository.CategoriasRepository;

import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
public class CategoriasController {

	@Autowired
	private CategoriasRepository categoriasRepository;

	@GetMapping("/obtenerCategorias")
	public List<CategoriasEntity> obtenerCategorias() {
		log.info(">>> Consulta obtenerCategorias");
		return categoriasRepository.findAll();
	}

	@PostMapping("/guardarCategoria")
	public CategoriasEntity guardarCategoria(@RequestBody CategoriasEntity entity) {
		log.info(">>> Consulta guardarCategoria");
		entity.setCreacion(LocalDateTime.now().toString());
		return categoriasRepository.save(entity);
	}

	@DeleteMapping("/borrarCategoria/{id}")
	public void borrarCategoria(@PathVariable Integer id) {
		log.info(">>> Consulta borrarCategoria");
		categoriasRepository.deleteById(id);
	}

}

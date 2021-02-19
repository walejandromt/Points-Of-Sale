package com.punto.de.venta.api.rest.services.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.punto.de.venta.api.rest.entity.ProductosEntity;
import com.punto.de.venta.api.rest.entity.VentaAdicionalEntity;
import com.punto.de.venta.api.rest.entity.VentaTotalEntity;
import com.punto.de.venta.api.rest.entity.VentasEntity;
import com.punto.de.venta.api.rest.enums.ProductosStatusEnum;
import com.punto.de.venta.api.rest.modelo.VentasTotalesModelo;
import com.punto.de.venta.api.rest.repository.ProductosRepository;
import com.punto.de.venta.api.rest.repository.VentaAdicionalRepository;
import com.punto.de.venta.api.rest.repository.VentaTotalRepository;
import com.punto.de.venta.api.rest.repository.VentasRepository;
import com.punto.de.venta.api.rest.services.VentasService;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class VentasServiceImpl implements VentasService {

	@Autowired
	private VentasRepository ventasRepository;

	@Autowired
	private ProductosRepository productosRepository;

	@Autowired
	private VentaAdicionalRepository ventaAdicionalRepository;

	@Autowired
	private VentaTotalRepository ventaTotalRepository;

	@Override
	@Transactional
	public List<VentasEntity> guardarVentas(VentasTotalesModelo entrada) {
		UUID clave = UUID.randomUUID();
		for (VentasEntity e : entrada.getVentas()) {
			e.setClave(clave.toString());
			e.setCreacion(LocalDateTime.now().toString());

			Optional<ProductosEntity> optProducto = productosRepository.findById(e.getIdProductos());

			if (!optProducto.isPresent()) {
				log.info("El producto no existe");
			}

			ProductosEntity producto = optProducto.get();
			producto.setStock(producto.getStock() - e.getCantidad());
			if (producto.getStock() <= 0) {
				producto.setEstatus(ProductosStatusEnum.AGOTADO);
			}

			productosRepository.saveAndFlush(producto);
		}
		List<VentasEntity> salida = ventasRepository.saveAll(entrada.getVentas());

		for (VentaAdicionalEntity e : entrada.getVentasAdicional()) {
			e.setCreacion(LocalDateTime.now().toString());
			e.setClave(clave.toString());
		}
		ventaAdicionalRepository.saveAll(entrada.getVentasAdicional());

		VentaTotalEntity ventaTotal = entrada.getVentaTotal();
		ventaTotal.setClave(clave.toString());
		ventaTotal.setCreacion(LocalDateTime.now().toString());
		ventaTotal.setRegistro(LocalDate.now().toString());

		ventaTotalRepository.saveAndFlush(ventaTotal);

		return salida;
	}

}

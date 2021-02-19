package com.punto.de.venta.api.rest.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.punto.de.venta.api.rest.entity.ProductosEntity;
import com.punto.de.venta.api.rest.modelo.TopProductos;

@Repository
public interface ProductosRepository
		extends JpaRepository<ProductosEntity, Integer>, JpaSpecificationExecutor<ProductosEntity> {

	Optional<ProductosEntity> findByClave(String clave);

	@Query("SELECT NEW com.punto.de.venta.api.rest.modelo.TopProductos(sum(venta.cantidad) AS totalCantidad, producto) FROM VentasEntity venta "
			+ "INNER JOIN ProductosEntity  producto ON producto.id = venta.idProductos "
			+ "GROUP BY venta.idProductos ORDER BY totalCantidad DESC")
	Optional<List<TopProductos>> obtenerTopProductos();
}

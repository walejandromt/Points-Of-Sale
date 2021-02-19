package com.punto.de.venta.api.rest.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.punto.de.venta.api.rest.entity.VentaTotalEntity;

@Repository
public interface VentaTotalRepository
		extends JpaRepository<VentaTotalEntity, Integer>, JpaSpecificationExecutor<VentaTotalEntity> {

	@Query("SELECT v FROM VentaTotalEntity AS v GROUP BY v.clave ORDER BY v.creacion DESC")
	Optional<List<VentaTotalEntity>> findAllGroupByClave();

	Optional<VentaTotalEntity> findByClave(String clave);

	Optional<List<VentaTotalEntity>> findByRegistro(String registro);

}

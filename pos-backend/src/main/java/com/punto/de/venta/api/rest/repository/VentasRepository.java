package com.punto.de.venta.api.rest.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.punto.de.venta.api.rest.entity.VentasEntity;

@Repository
public interface VentasRepository extends JpaRepository<VentasEntity, Integer>, JpaSpecificationExecutor<VentasEntity> {

	@Query("SELECT v FROM VentasEntity AS v GROUP BY v.clave ORDER BY v.creacion DESC")
	Optional<List<VentasEntity>> findAllGroupByClave();

	Optional<List<VentasEntity>> findByClave(String clave);

}

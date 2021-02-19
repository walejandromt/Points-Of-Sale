package com.punto.de.venta.api.rest.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.punto.de.venta.api.rest.entity.VentaAdicionalEntity;

@Repository
public interface VentaAdicionalRepository
		extends JpaRepository<VentaAdicionalEntity, Integer>, JpaSpecificationExecutor<VentaAdicionalEntity> {
	Optional<List<VentaAdicionalEntity>> findByClave(String clave);
}

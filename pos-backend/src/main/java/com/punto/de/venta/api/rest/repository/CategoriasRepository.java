package com.punto.de.venta.api.rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.punto.de.venta.api.rest.entity.CategoriasEntity;

@Repository
public interface CategoriasRepository
		extends JpaRepository<CategoriasEntity, Integer>, JpaSpecificationExecutor<CategoriasEntity> {

}

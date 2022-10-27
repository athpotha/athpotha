package com.athpotha.carrierGuidanceSystem.repository;

import com.athpotha.carrierGuidanceSystem.model.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaterialReposiroty extends JpaRepository<Material, Long> {

    @Query("select m from Material m where m.userId in (:id)")
    List<Material> findMaterial(Long id);

}

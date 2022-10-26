package com.athpotha.carrierGuidanceSystem.controller;

import com.athpotha.carrierGuidanceSystem.model.Material;
import com.athpotha.carrierGuidanceSystem.repository.MaterialReposiroty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("materials")
public class MaterialController {

    @Autowired
    private MaterialReposiroty materialReposiroty;

    @PostMapping("add-material")
    public ResponseEntity addMaterials(@RequestBody Material material){

        Material m = new Material();
        m.setMaterialUrl(material.getMaterialUrl());
        m.setContent(material.getContent());
        m.setUserId(material.getUserId());

        System.out.println(m.getUserId());
        System.out.println(m.getMaterialUrl());
        System.out.println(m.getContent());
        materialReposiroty.save(material);

        return ResponseEntity.ok("Successfully Updated");

    }

    @PostMapping("get-material/{id}")
    public List<Material> getMaterials(@PathVariable long id){

        System.out.println("user "+id);
        return materialReposiroty.findAll();
        //return materialReposiroty.findMaterial(17L);

    }

}

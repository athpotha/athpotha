package com.athpotha.carrierGuidanceSystem.controller;

import com.athpotha.carrierGuidanceSystem.model.University;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("university")
public class UniversityController {

    @Autowired
    private UniversityRepository universityRepository;

    @PostMapping("courses")
    public List<University> getAllUniversities(@RequestBody User user){
        return universityRepository.findAll();
    }

}

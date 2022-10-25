package com.athpotha.carrierGuidanceSystem.controller;

import com.athpotha.carrierGuidanceSystem.model.Tutor;
import com.athpotha.carrierGuidanceSystem.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("tutor")
public class TutorController {

    @Autowired
    private TutorRepository tutorRepository;

    @PostMapping("getTutors")
    public List<Tutor> getAllTutors(){
        return tutorRepository.findAll();
    }

}

package com.athpotha.carrierGuidanceSystem.controller;

import com.athpotha.carrierGuidanceSystem.model.*;
import com.athpotha.carrierGuidanceSystem.repository.*;
import com.athpotha.carrierGuidanceSystem.service.UserService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("network")
public class NetworkController {

    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private UniversityRepository universityRepository;

    @Autowired
    private CommiunityRepository commiunityRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("getTutors")
    public List<Tutor> getTutors(@RequestBody User user){
        List<Tutor> tutorsa  = tutorRepository.findTutorsunFollowing(user.getUser_id(),UserType.tutor);
        return tutorsa;
    }

    @PostMapping("getUniversities")
    public List<University> getUniversities(@RequestBody User user){
        List<University> universities = universityRepository.findUniversitiesunFollowing(user.getUser_id(),UserType.university);
        return universities;
    }

    @PostMapping("getCommunities")
    public List<Commiunity> getCommunities(@RequestBody User user){
        List<Commiunity> commiunitiesa  = commiunityRepository.findCommunitiesunFollowing(user.getUser_id(),UserType.commiunity);
        return commiunitiesa;
    }

    @PostMapping("getStudents")
    public List<Student> getStudents(@RequestBody User user){
        List<Student> studentsa  = studentRepository.findStudentssunFollowing(user.getUser_id(),UserType.student);
        return studentsa;
    }

}

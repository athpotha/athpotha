package com.athpotha.carrierGuidanceSystem.controller;

import com.athpotha.carrierGuidanceSystem.model.Course;
import com.athpotha.carrierGuidanceSystem.model.University;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.CourseRepository;
import com.athpotha.carrierGuidanceSystem.repository.UniversityRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("university")
public class UniversityController {

    @Autowired
    private UniversityRepository universityRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    // view all degrees
    @PostMapping("courses")
    public List<University> getAllUniversities(@RequestBody User user){
        return universityRepository.findAll();
    }

    @PostMapping("getUniDetails")
    public Optional<University> getUniDetails(@RequestBody University uni){
        return universityRepository.findById(uni.getUserId());
    }

    @PutMapping("updateUniDetails/{id}")
    public ResponseEntity updateUniDetails(@PathVariable long id, @RequestBody University uniAbout){

        University university = universityRepository.findById(id).
                orElseThrow(()->new RuntimeException("User doesnt exist :"+id));
        university.setAbout(uniAbout.getAbout());

        University updateAbout = universityRepository.save(university);
        return ResponseEntity.ok("Successfully Updated");

    }

    @PutMapping("updateCourseReq/{cid}")
    public ResponseEntity updateUniRequirements(@PathVariable long cid, @RequestBody Course courseReq){

        Course course = courseRepository.findById(cid).
                orElseThrow(() -> new RuntimeException(("User doesn't exist :"+cid)));

        course.setPreRequirements(courseReq.getPreRequirements());

        courseRepository.save(course);
        return ResponseEntity.ok("Successfully Updated");

    }

    @PutMapping("updateCourseDes/{cid}")
    public ResponseEntity updateUniDescription(@PathVariable long cid, @RequestBody Course courseDes){

        Course course = courseRepository.findById(cid).
                orElseThrow(() -> new RuntimeException("User doesn't exist :"+cid));

        course.setCourseDescription(courseDes.getCourseDescription());

        courseRepository.save(course);
        return ResponseEntity.ok("Successfully Updated");

    }

    @PutMapping("updateCourseOpp/{cid}")
    public ResponseEntity updateUniOppertunities(@PathVariable long cid, @RequestBody Course courseOpp){

        Course course = courseRepository.findById(cid).
                orElseThrow(() -> new RuntimeException("User doesn't exist"+cid));

        course.setCarrerOpertunities(courseOpp.getCarrerOpertunities());

        courseRepository.save(course);
        return ResponseEntity.ok("Successfully Updated");

    }
}

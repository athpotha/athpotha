package com.athpotha.carrierGuidanceSystem.service;

import java.util.List;

import com.athpotha.carrierGuidanceSystem.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);
	public List<Student> getAllStudents();
}

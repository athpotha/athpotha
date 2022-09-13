package com.athpotha.carrierGuidanceSystem.controller;

import com.athpotha.carrierGuidanceSystem.model.Notification;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
public class ProfileController {
    @Autowired
    private UserRepository userRepository;

    @PutMapping("/profile/edit-info/{id}")
    public ResponseEntity<User> markAsRead(@PathVariable long id, @RequestBody User userDetails){
        User user=userRepository.findById(id)
                .orElseThrow(()->new RuntimeException("User doesnt exist :"+id));

        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setDescription(userDetails.getDescription());

//        user.setRead_Unread(1);
        User updatedUser= userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
//        return notificationRepository.save(id);

    }
}

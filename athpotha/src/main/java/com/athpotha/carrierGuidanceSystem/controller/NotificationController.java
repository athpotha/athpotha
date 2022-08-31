package com.athpotha.carrierGuidanceSystem.controller;

import com.athpotha.carrierGuidanceSystem.model.Notification;
import com.athpotha.carrierGuidanceSystem.repository.NotificationRepository;
import com.athpotha.carrierGuidanceSystem.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("notification")
@CrossOrigin
public class NotificationController {

    @Autowired
    private NotificationService notificationService;
    @Autowired
    private NotificationRepository notificationRepository;
    @PostMapping("/getAllNotifications")
    public List<Notification> getAllNotifications(){
        return notificationService.getAllNotifications();
    }

    // updating mark as read in notification
    @PutMapping("/markAsRead/{id}")
    public ResponseEntity<Notification> markAsRead(@PathVariable int id,@RequestBody Notification notificationDetails){
        Notification notification=notificationRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Notification doesnt exist :"+id));

        notification.setRead_Unread(1);
        Notification updatedNotification= notificationRepository.save(notification);
        return ResponseEntity.ok(updatedNotification);
//        return notificationRepository.save(id);

    }


    //Test add notification for testing
//    @PostMapping("/addNotification")
//    public Notification addNotification(){
//
//    }

    //addNotification for testing
    @PostMapping("/addNotification")
    public Notification addNotification(@RequestBody Notification notification){
        return notificationRepository.save(notification);
    }



}

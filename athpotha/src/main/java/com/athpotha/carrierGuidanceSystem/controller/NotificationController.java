package com.athpotha.carrierGuidanceSystem.controller;

import com.athpotha.carrierGuidanceSystem.model.Notification;
import com.athpotha.carrierGuidanceSystem.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping("/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PostMapping("/getAllNotifications")
    public List<Notification> getAllNotifications(){
        return notificationService.getAllNotifications();
    }



}

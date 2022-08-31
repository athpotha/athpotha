package com.athpotha.carrierGuidanceSystem.service;

import com.athpotha.carrierGuidanceSystem.model.Notification;
import com.athpotha.carrierGuidanceSystem.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NotificationServiceImpl implements NotificationService{

    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }
}

package com.athpotha.carrierGuidanceSystem.service;

import com.athpotha.carrierGuidanceSystem.model.Notification;
import com.athpotha.carrierGuidanceSystem.model.NotificationProfile;

import java.util.List;


public interface NotificationService {

    public List<Notification> getAllNotifications();
    public List<NotificationProfile> getNotificationProfile();
}

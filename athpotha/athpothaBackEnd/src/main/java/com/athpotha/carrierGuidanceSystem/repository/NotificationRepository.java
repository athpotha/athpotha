package com.athpotha.carrierGuidanceSystem.repository;

import com.athpotha.carrierGuidanceSystem.model.Notification;
import com.athpotha.carrierGuidanceSystem.model.NotificationProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification,Integer> {
//    @Override
//    <S extends Notification> S save(S entity);
    @Query(value = "SELECT u.profile_picture, n.notification_id, n.message, n.notification_type, n.read_unread, n.receive_datetime, n.receiver_id, n.seen_not_seen, n.sender_id FROM notification AS n INNER JOIN user AS u ON n.notification_id=u.user_id",nativeQuery = true)
    public List<NotificationProfile> getNotificationProfile();
}

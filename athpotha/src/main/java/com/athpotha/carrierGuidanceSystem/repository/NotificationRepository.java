package com.athpotha.carrierGuidanceSystem.repository;

import com.athpotha.carrierGuidanceSystem.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepository extends JpaRepository<Notification,Integer> {
//    @Override
//    <S extends Notification> S save(S entity);

}

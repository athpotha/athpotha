package com.athpotha.carrierGuidanceSystem.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int notification_id;

    @Enumerated(value = EnumType.STRING)
    private Notification_Type notification_type;

    private String message;
    private int sender_id;
    private int read_Unread;
    private int seen_not_seen;
    private Date receive_datetime;
    private int receiver_Id;


}

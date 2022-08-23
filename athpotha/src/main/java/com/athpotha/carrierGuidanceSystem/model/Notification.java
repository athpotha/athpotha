package com.athpotha.carrierGuidanceSystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int notification_id;
    private String notification_Type;

    private String message;
    private int sender_id;
    private int read_Unread;
    private int seen_not_seen;
    private Date receive_datetime;
    private int receiver_Id;

    public Notification() {
    }

    public Notification(String notification_Type, String message, int sender_id, int read_Unread, int seen_not_seen, Date receive_datetime, int receiver_Id) {
        this.notification_Type = notification_Type;
        this.message = message;
        this.sender_id = sender_id;
        this.read_Unread = read_Unread;
        this.seen_not_seen = seen_not_seen;
        this.receive_datetime = receive_datetime;
        this.receiver_Id = receiver_Id;
    }

    public int getNotification_id() {
        return notification_id;
    }

    public void setNotification_id(int notification_id) {
        this.notification_id = notification_id;
    }

    public String getNotification_Type() {
        return notification_Type;
    }

    public void setNotification_Type(String notification_Type) {
        this.notification_Type = notification_Type;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getSender_id() {
        return sender_id;
    }

    public void setSender_id(int sender_id) {
        this.sender_id = sender_id;
    }

    public int getRead_Unread() {
        return read_Unread;
    }

    public void setRead_Unread(int read_Unread) {
        this.read_Unread = read_Unread;
    }

    public int getSeen_not_seen() {
        return seen_not_seen;
    }

    public void setSeen_not_seen(int seen_not_seen) {
        this.seen_not_seen = seen_not_seen;
    }

    public Date getReceive_datetime() {
        return receive_datetime;
    }

    public void setReceive_datetime(Date receive_datetime) {
        this.receive_datetime = receive_datetime;
    }

    public int getReceiver_Id() {
        return receiver_Id;
    }

    public void setReceiver_Id(int receiver_Id) {
        this.receiver_Id = receiver_Id;
    }
}

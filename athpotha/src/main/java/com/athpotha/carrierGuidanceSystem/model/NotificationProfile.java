package com.athpotha.carrierGuidanceSystem.model;

        import lombok.Getter;
        import lombok.Setter;

        import javax.persistence.Entity;
        import javax.persistence.GeneratedValue;
        import javax.persistence.GenerationType;
        import javax.persistence.Id;
        import java.util.Date;

@Getter
@Setter
public class NotificationProfile {
    private int notification_id;
    private String notification_Type;

    private String message;
    private int sender_id;
    private int read_Unread;
    private int seen_not_seen;
    private Date receive_datetime;
    private int receiver_Id;
    private String profilePic;


}


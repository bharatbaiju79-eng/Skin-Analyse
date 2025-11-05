package com.Dev3.Dev3backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collection = "events")
public class Event {
    @Id
    private String id;
    private String title;
    private String description;
    private String category;
    private LocalDateTime eventDate;
    private String location;
    private String createdBy;
    private int capacity;
    private List<String> registeredUsers;
}
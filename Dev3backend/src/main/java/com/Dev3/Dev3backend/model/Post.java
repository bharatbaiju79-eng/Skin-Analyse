package com.Dev3.Dev3backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collection = "posts")
public class Post {
    @Id
    private String id;
    private String section;
    private String authorId;
    private String content;
    private LocalDateTime createdAt = LocalDateTime.now();
    private List<String> likedBy;
}

package com.Dev3.Dev3backend.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.Dev3.Dev3backend.model.Message;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findBySenderIdAndReceiverId(String senderId, String receiverId);
    List<Message> findByReceiverId(String receiverId);
}


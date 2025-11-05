package com.Dev3.Dev3backend.controller;

import com.Dev3.Dev3backend.model.Message;
import com.Dev3.Dev3backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
public class MessageController {
    @Autowired
    private MessageRepository messageRepository;


    @GetMapping("/chat/{senderId}/{receiverId}")
    public List<Message> getConversation(@PathVariable String senderId, @PathVariable String receiverId) {
        return messageRepository.findBySenderIdAndReceiverId(senderId, receiverId);
    }
    @PostMapping("/send")
    public Message sendMessage(@RequestBody Message message) {
        return messageRepository.save(message);
    }
}

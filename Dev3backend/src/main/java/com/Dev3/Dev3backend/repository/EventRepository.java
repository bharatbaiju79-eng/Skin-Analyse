package com.Dev3.Dev3backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.Dev3.Dev3backend.model.Event;

import java.util.List;

public interface EventRepository extends MongoRepository<Event, String> {
    List<Event> findByCategory(String category);
}

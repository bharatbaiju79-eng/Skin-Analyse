package com.Dev3.Dev3backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.Dev3.Dev3backend.model.Post;

public interface PostRepository extends MongoRepository<Post, String> { }

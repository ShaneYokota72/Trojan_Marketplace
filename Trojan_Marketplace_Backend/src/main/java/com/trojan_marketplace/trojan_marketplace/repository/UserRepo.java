package com.trojan_marketplace.trojan_marketplace.repository;

import com.trojan_marketplace.trojan_marketplace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer>{
    
    User findByUsername(String username);
    
}

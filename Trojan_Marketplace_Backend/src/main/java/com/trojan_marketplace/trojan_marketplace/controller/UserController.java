package com.trojan_marketplace.trojan_marketplace.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
// import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

import com.trojan_marketplace.trojan_marketplace.model.User;
import com.trojan_marketplace.trojan_marketplace.repository.UserRepo;

import org.mindrot.jbcrypt.BCrypt;

@RestController
@RequestMapping(value = "/auth")
public class UserController {

    @Autowired
    UserRepo User_Repo;

    private String salt = BCrypt.gensalt();

    // /auth/add (POST) - sign up (frontend:make sure the user sends all info)
    @PostMapping("/signup")
    ResponseEntity<?> signup(@RequestBody User user){
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        User_Repo.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    // /auth/login (POST) - log in (frontend:make sure the user sends all info)
    @PostMapping("/login")
    ResponseEntity<?> login(@RequestBody Map<String, String> body
        // @RequestParam String username,
        // @RequestParam String password
    ){
        String username = body.get("username");
        String password = body.get("password");
        
        User temp = User_Repo.findByUsername(username);
        if(temp == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
        if(BCrypt.checkpw(password, temp.getPassword())){
            return ResponseEntity.status(HttpStatus.OK).body(temp);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    // /auth/getall (GET) - get all user
    @GetMapping("/getall")
    List<User> getAlluser(){
        List<User> users = User_Repo.findAll();
        return users;
    }

}

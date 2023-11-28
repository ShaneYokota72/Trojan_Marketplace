package com.trojan_marketplace.trojan_marketplace.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.mindrot.jbcrypt.BCrypt;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
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

    @PostMapping("/logout")
    ResponseEntity<?> logout(HttpServletResponse response){
        Cookie cookie = new Cookie("user-id", "0");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return ResponseEntity.ok().build();
    }
   
    @GetMapping("/getcookie")
    ResponseEntity<?> getcookie(HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for(int i=0; i<cookies.length; i++){
                if("user-id".equals(cookies[i].getName())){
                    return ResponseEntity.ok(cookies[i].getValue());
                }
            }
        } else {
            return ResponseEntity.status(401).body(0);
        }

        return ResponseEntity.status(401).body(0);
    }

    // /auth/login (POST) - log in (frontend:make sure the user sends all info)
    @PostMapping("/login")
    ResponseEntity<?> login(@RequestBody Map<String, String> body, HttpServletResponse response
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
            Cookie cookie = new Cookie("user-id", Integer.toString(temp.getId()));
            response.addCookie(cookie);
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

    // /auth/getone/{user id}
    @GetMapping("/getone/{uid}")
    ResponseEntity<?> getoneuser(@PathVariable String uid){
        Optional<User> optionalUser = User_Repo.findById(Integer.parseInt(uid));
        if(!optionalUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        User user = optionalUser.get();
        // return item;
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

}

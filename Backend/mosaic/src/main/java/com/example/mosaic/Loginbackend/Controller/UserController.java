package com.example.mosaic.Loginbackend.Controller;

import com.example.mosaic.Loginbackend.Entity.User;
import com.example.mosaic.Loginbackend.Serivce.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/statistics/total-members")
    public ResponseEntity<Long> getTotalMembers() {
        long totalMembers = userService.getTotalMembers();
        return ResponseEntity.ok(totalMembers);
    }

}

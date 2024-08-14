package com.example.mosaic.Loginbackend.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mosaic.Loginbackend.Entity.User;
import com.example.mosaic.Loginbackend.Serivce.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody User user, HttpServletRequest request) {
        Optional<User> foundUser = userService.findByEmail(user.getEmail());

        if (foundUser.isPresent()) {
            User existingUser = foundUser.get();

            if (existingUser.getPassword().equals(user.getPassword())) {
                request.getSession().setAttribute("userId", existingUser.getId());
                return ResponseEntity.ok(existingUser);
            } else {
                return ResponseEntity.status(401).body(null);
            }
        } else {
            return ResponseEntity.status(401).body(null);
        }
    }
}

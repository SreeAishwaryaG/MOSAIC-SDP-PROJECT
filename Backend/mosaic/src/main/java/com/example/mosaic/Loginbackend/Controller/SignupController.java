package com.example.mosaic.Loginbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mosaic.Loginbackend.Entity.User;
import com.example.mosaic.Loginbackend.Serivce.EmailService;
import com.example.mosaic.Loginbackend.Serivce.UserService;
import com.example.mosaic.ProfileBackend.Entity.Profile;
import com.example.mosaic.ProfileBackend.Service.ProfileService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SignupController {

    @Autowired
    private UserService userService;

    @Autowired
    private ProfileService profileService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {

            User savedUser = userService.saveUser(user);

            Profile profile = new Profile();
            profile.setUser(savedUser);
            profile.setEmail(savedUser.getEmail());
            profile.setFirstName(savedUser.getFirstName());
            profile.setLastName(savedUser.getLastName());
            profile.setPhoneNumber(savedUser.getPhoneNumber());
            profileService.createOrUpdateProfile(profile);

            emailService.sendWelcomeEmail(
                    savedUser.getEmail(),
                    "Welcome to Mosaic",
                    "Dear " + savedUser.getFirstName() +
                            ",\n\nThank you for signing up to Mosaic!\n\nBest regards,\nMosaic Team");

            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error during signup: " + e.getMessage());
        }
    }
}

package com.example.mosaic.ProfileBackend.Controller;

import com.example.mosaic.ProfileBackend.Entity.Profile;
import com.example.mosaic.ProfileBackend.Service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/profile")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping("/createOrUpdate")
    public ResponseEntity<Profile> createOrUpdateProfile(@RequestBody Profile profile) {
        Profile updatedProfile = profileService.createOrUpdateProfile(profile);
        return new ResponseEntity<>(updatedProfile, HttpStatus.OK);
    }

    @GetMapping("/getProfile")
    public ResponseEntity<Profile> getProfileByEmail(@RequestParam String email) {
        Optional<Profile> profile = profileService.findByEmail(email);
        if (profile.isPresent()) {
            return new ResponseEntity<>(profile.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

package com.example.mosaic.JoinPage.MusicClub.Controller;

import jakarta.transaction.Transactional;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.mosaic.JoinPage.MusicClub.Entity.Music;
import com.example.mosaic.JoinPage.MusicClub.Repo.MusicRepo;
import com.example.mosaic.JoinPage.MusicClub.Service.MusicService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MusicController {

    @Autowired
    private MusicRepo repo;

    @Autowired
    private MusicService service;

    @PostMapping("/music-join")
    public ResponseEntity<?> joinClub(@RequestBody Music music) {
        service.joinClub(music);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/check-musicclub-status/{email}")
    public ResponseEntity<Map<String, Boolean>> checkClubStatus(@PathVariable String email) {
        boolean isJoined = repo.existsByEmail(email);
        Map<String, Boolean> response = new HashMap<>();
        response.put("isJoined", isJoined);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/active-musicusers")
    public Map<String, Object> getActiveUsersCountByMonth() {
        // This method should return the data for the line graph
        Map<String, Object> response = new HashMap<>();
        response.put("labels",
                new String[] { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" });
        response.put("data", service.getActiveUsersCountByMonth());
        return response;
    }

    @Transactional
    @DeleteMapping("/leave-musicclub/{email}")
    public ResponseEntity<Void> leaveClub(@PathVariable String email) {
        repo.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}

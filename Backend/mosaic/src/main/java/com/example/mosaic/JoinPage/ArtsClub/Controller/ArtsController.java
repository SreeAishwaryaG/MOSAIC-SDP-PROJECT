package com.example.mosaic.JoinPage.ArtsClub.Controller;

import com.example.mosaic.JoinPage.ArtsClub.Entity.Arts;
import com.example.mosaic.JoinPage.ArtsClub.Repo.ArtsRepo;
import com.example.mosaic.JoinPage.ArtsClub.Service.ArtsService;

import jakarta.transaction.Transactional;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ArtsController {

    @Autowired
    private ArtsRepo repo;

    @Autowired
    private ArtsService service;

    @PostMapping("/arts-join")
    public ResponseEntity<?> joinClub(@RequestBody Arts arts) {
        service.joinClub(arts);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/check-artsclub-status/{email}")
    public ResponseEntity<Map<String, Boolean>> checkClubStatus(@PathVariable String email) {
        boolean isJoined = repo.existsByEmail(email);
        Map<String, Boolean> response = new HashMap<>();
        response.put("isJoined", isJoined);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/active-artsusers")
    public Map<String, Object> getActiveUsersCountByMonth() {

        Map<String, Object> response = new HashMap<>();
        response.put("labels",
                new String[] { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" });
        response.put("data", service.getActiveUsersCountByMonth());
        return response;
    }

    @Transactional
    @DeleteMapping("/leave-artsclub/{email}")
    public ResponseEntity<Void> leaveClub(@PathVariable String email) {
        repo.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}

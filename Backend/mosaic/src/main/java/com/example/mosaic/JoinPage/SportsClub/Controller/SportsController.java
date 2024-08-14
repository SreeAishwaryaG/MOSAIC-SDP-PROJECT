package com.example.mosaic.JoinPage.SportsClub.Controller;

import com.example.mosaic.JoinPage.SportsClub.Entity.Sports;
import com.example.mosaic.JoinPage.SportsClub.Repo.SportsRepo;
import com.example.mosaic.JoinPage.SportsClub.Service.SportsService;

import jakarta.transaction.Transactional;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SportsController {

    @Autowired
    private SportsService sportsService;

    @Autowired
    private SportsRepo sportsRepo;

    @PostMapping("/sports-join")
    public ResponseEntity<?> joinClub(@RequestBody Sports sports) {
        sportsService.joinClub(sports);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/check-club-status/{email}")
    public ResponseEntity<Map<String, Boolean>> checkClubStatus(@PathVariable String email) {
        boolean isJoined = sportsRepo.existsByEmail(email);
        Map<String, Boolean> response = new HashMap<>();
        response.put("isJoined", isJoined);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/active-sportsusers")
    public Map<String, Object> getActiveUsersCountByMonth() {
        // This method should return the data for the line graph
        Map<String, Object> response = new HashMap<>();
        response.put("labels",
                new String[] { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" });
        response.put("data", sportsService.getActiveUsersCountByMonth());
        return response;
    }

    @Transactional
    @DeleteMapping("/leave-club/{email}")
    public ResponseEntity<Void> leaveClub(@PathVariable String email) {
        sportsRepo.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}

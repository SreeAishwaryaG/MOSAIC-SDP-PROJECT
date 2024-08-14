package com.example.mosaic.JoinPage.CodingClub.Controller;

import jakarta.transaction.Transactional;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.mosaic.JoinPage.CodingClub.Entity.Coding;
import com.example.mosaic.JoinPage.CodingClub.Repo.CodingRepo;
import com.example.mosaic.JoinPage.CodingClub.Service.CodingService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CodingController {

    @Autowired
    private CodingRepo repo;

    @Autowired
    private CodingService service;

    @PostMapping("/coding-join")
    public ResponseEntity<?> joinClub(@RequestBody Coding coding) {
        service.joinClub(coding);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/check-codingclub-status/{email}")
    public ResponseEntity<Map<String, Boolean>> checkClubStatus(@PathVariable String email) {
        boolean isJoined = repo.existsByEmail(email);
        Map<String, Boolean> response = new HashMap<>();
        response.put("isJoined", isJoined);
        return ResponseEntity.ok(response);
    }

    @Transactional
    @DeleteMapping("/leave-codingclub/{email}")
    public ResponseEntity<Void> leaveClub(@PathVariable String email) {
        repo.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}

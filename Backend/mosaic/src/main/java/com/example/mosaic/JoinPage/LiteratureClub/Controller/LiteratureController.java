package com.example.mosaic.JoinPage.LiteratureClub.Controller;

import com.example.mosaic.JoinPage.LiteratureClub.Entity.Literature;
import com.example.mosaic.JoinPage.LiteratureClub.Repo.LiteratureRepo;
import com.example.mosaic.JoinPage.LiteratureClub.Service.LiteratureService;

import jakarta.transaction.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LiteratureController {

    @Autowired
    private LiteratureService service;

    @Autowired
    private LiteratureRepo repo;

    @PostMapping("/lite-join")
    public ResponseEntity<?> joinClub(@RequestBody Literature literature) {
        service.joinClub(literature);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/check-liteclub-status/{email}")
    public ResponseEntity<Map<String, Boolean>> checkClubStatus(@PathVariable String email) {
        boolean isJoined = repo.existsByEmail(email);
        Map<String, Boolean> response = new HashMap<>();
        response.put("isJoined", isJoined);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/members")
    public ResponseEntity<List<Literature>> getAllMembers() {
        List<Literature> members = repo.findAll();
        return ResponseEntity.ok(members);
    }

    @GetMapping("/active-liteusers")
    public Map<String, Object> getActiveUsersCountByMonth() {

        Map<String, Object> response = new HashMap<>();
        response.put("labels",
                new String[] { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" });
        response.put("data", service.getActiveUsersCountByMonth());
        return response;
    }

    @Transactional
    @DeleteMapping("/leave-liteclub/{email}")
    public ResponseEntity<Void> leaveClub(@PathVariable String email) {
        repo.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}

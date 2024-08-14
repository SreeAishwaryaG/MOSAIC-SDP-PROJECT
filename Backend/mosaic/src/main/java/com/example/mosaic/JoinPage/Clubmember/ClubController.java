package com.example.mosaic.JoinPage.Clubmember;

import com.example.mosaic.JoinPage.SportsClub.Repo.SportsRepo;
// import com.example.mosaic.JoinPage.MusicClub.Entity.Music;
// import com.example.mosaic.JoinPage.MusicClub.Repo.MusicRepo;
import com.example.mosaic.JoinPage.ArtsClub.Repo.ArtsRepo;
import com.example.mosaic.JoinPage.CodingClub.Repo.CodingRepo;
import com.example.mosaic.JoinPage.LiteratureClub.Repo.LiteratureRepo;
import com.example.mosaic.JoinPage.MusicClub.Repo.MusicRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class ClubController {

    @Autowired
    private LiteratureRepo literatureRepo;

    @Autowired
    private SportsRepo sportsRepo;

    @Autowired
    private MusicRepo musicRepo;
    @Autowired
    private CodingRepo codingRepo;

    @Autowired
    private ArtsRepo artsRepo;

    @GetMapping("/{clubType}/members")
    public ResponseEntity<List<?>> getMembersByClubType(@PathVariable String clubType) {
        List<?> members;
        switch (clubType.toLowerCase()) {
            case "literature":
                members = literatureRepo.findAll();
                break;
            case "sports":
                members = sportsRepo.findAll();
                break;
            case "music":
                members = musicRepo.findAll();
                break;
            case "coding":
                members = codingRepo.findAll();
                break;
            case "arts":
                members = artsRepo.findAll();
                break;
            default:
                return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(members);
    }

    @GetMapping("/{clubType}/count")
    public ResponseEntity<Map<String, Integer>> getMemberCountByClubType(@PathVariable String clubType) {
        int count;
        switch (clubType.toLowerCase()) {
            case "literature":
                count = (int) literatureRepo.count();
                break;
            case "sports":
                count = (int) sportsRepo.count();
                break;
            case "arts":
                count = (int) artsRepo.count();
                break;
            default:
                return ResponseEntity.badRequest().build();
        }
        Map<String, Integer> response = new HashMap<>();
        response.put("count", count);
        return ResponseEntity.ok(response);
    }
}

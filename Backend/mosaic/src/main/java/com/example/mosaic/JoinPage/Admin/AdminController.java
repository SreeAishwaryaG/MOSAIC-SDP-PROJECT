package com.example.mosaic.JoinPage.Admin;

import com.example.mosaic.JoinPage.SportsClub.Service.SportsService;
import com.example.mosaic.JoinPage.ArtsClub.Service.ArtsService;
import com.example.mosaic.JoinPage.CodingClub.Service.CodingService;
import com.example.mosaic.JoinPage.LiteratureClub.Service.LiteratureService;
import com.example.mosaic.JoinPage.MusicClub.Service.MusicService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private SportsService sportsService;

    @Autowired
    private ArtsService artsService;
    @Autowired
    private MusicService musicService;
    @Autowired
    private CodingService codingService;

    @Autowired
    private LiteratureService literatureService;

    @GetMapping("/admin/active-users")
    public ResponseEntity<Map<String, Long>> getActiveUsersCount() {
        Map<String, Long> activeUsersCount = new HashMap<>();
        activeUsersCount.put("Sports", sportsService.getActiveUsersCount());
        activeUsersCount.put("Arts", artsService.getActiveUsersCount());
        activeUsersCount.put("Literature", literatureService.getActiveUsersCount());
        activeUsersCount.put("Music", musicService.getActiveUsersCount());
        activeUsersCount.put("Coding", codingService.getActiveUsersCount());

        return ResponseEntity.ok(activeUsersCount);
    }
}

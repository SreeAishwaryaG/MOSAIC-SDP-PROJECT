package com.example.mosaic.Membership.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mosaic.Membership.Service.MembershipService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class MembershipController {

    @Autowired
    private MembershipService membershipService;

    @GetMapping("/check-membership")
    public ResponseEntity<Map<String, Boolean>> checkMembership(HttpServletRequest request, @RequestParam int clubId) {
        String userId = (String) request.getSession().getAttribute("userId");

        boolean isMember = membershipService.checkMembership(userId, clubId);

        Map<String, Boolean> response = new HashMap<>();
        response.put("isMember", isMember);

        return ResponseEntity.ok(response);
    }

}

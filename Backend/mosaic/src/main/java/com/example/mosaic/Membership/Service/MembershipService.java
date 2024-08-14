package com.example.mosaic.Membership.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaic.Membership.Repo.MembershipRepo;

@Service
public class MembershipService {

    @Autowired
    private MembershipRepo membershipRepository;

    public boolean checkMembership(String userId, int clubId) {
        return membershipRepository.existsByUserIdAndClubId(userId, clubId);
    }
}

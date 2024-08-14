package com.example.mosaic.Membership.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mosaic.Membership.Entity.Membership;

public interface MembershipRepo extends JpaRepository<Membership, Integer> {
    boolean existsByUserIdAndClubId(String userId, int clubId);
}

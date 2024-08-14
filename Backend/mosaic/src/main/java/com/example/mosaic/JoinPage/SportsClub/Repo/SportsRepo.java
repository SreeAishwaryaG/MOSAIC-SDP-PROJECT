package com.example.mosaic.JoinPage.SportsClub.Repo;

import com.example.mosaic.JoinPage.SportsClub.Entity.Sports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SportsRepo extends JpaRepository<Sports, Long> {
    boolean existsByEmail(String email);

    void deleteByEmail(String email);
}
package com.example.mosaic.JoinPage.ArtsClub.Repo;

import com.example.mosaic.JoinPage.ArtsClub.Entity.Arts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtsRepo extends JpaRepository<Arts, Integer> {
    boolean existsByEmail(String email);

    void deleteByEmail(String email);
}
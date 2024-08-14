package com.example.mosaic.JoinPage.CodingClub.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mosaic.JoinPage.CodingClub.Entity.Coding;

@Repository
public interface CodingRepo extends JpaRepository<Coding, Integer> {
    boolean existsByEmail(String email);

    void deleteByEmail(String email);
}
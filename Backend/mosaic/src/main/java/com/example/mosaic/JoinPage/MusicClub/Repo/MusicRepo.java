package com.example.mosaic.JoinPage.MusicClub.Repo;

import com.example.mosaic.JoinPage.MusicClub.Entity.Music;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicRepo extends JpaRepository<Music, Long> {
    boolean existsByEmail(String email);

    void deleteByEmail(String email);
}
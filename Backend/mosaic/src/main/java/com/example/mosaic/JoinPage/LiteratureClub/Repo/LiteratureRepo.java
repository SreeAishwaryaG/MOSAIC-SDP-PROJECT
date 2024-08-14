package com.example.mosaic.JoinPage.LiteratureClub.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mosaic.JoinPage.LiteratureClub.Entity.Literature;

@Repository
public interface LiteratureRepo extends JpaRepository<Literature, Long> {
    boolean existsByEmail(String email);

    void deleteByEmail(String email);
}
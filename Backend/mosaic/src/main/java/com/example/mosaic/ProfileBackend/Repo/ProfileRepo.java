package com.example.mosaic.ProfileBackend.Repo;

import com.example.mosaic.ProfileBackend.Entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfileRepo extends JpaRepository<Profile, Integer> {
    Optional<Profile> findByEmail(String email);
}

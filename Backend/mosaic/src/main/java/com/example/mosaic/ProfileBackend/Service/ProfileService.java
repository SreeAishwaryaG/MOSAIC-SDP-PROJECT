package com.example.mosaic.ProfileBackend.Service;

import com.example.mosaic.ProfileBackend.Entity.Profile;
import com.example.mosaic.ProfileBackend.Repo.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepo profileRepository;

    public Profile createOrUpdateProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    public Optional<Profile> findByEmail(String email) {
        return profileRepository.findByEmail(email);
    }
}

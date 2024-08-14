package com.example.mosaic.Loginbackend.Serivce;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaic.Loginbackend.Entity.User;
import com.example.mosaic.Loginbackend.Repo.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public User saveUser(User user) {
        return userRepo.save(user);
    }

    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    public Optional<User> findByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public long getTotalMembers() {
        return userRepo.count();
    }
}

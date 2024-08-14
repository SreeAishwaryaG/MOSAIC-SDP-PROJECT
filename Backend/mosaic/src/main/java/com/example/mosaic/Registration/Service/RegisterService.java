package com.example.mosaic.Registration.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaic.Registration.Entity.Register;
import com.example.mosaic.Registration.Repo.RegisterRepo;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepo repo;

    public Register saveRegistration(Register registration) {
        return repo.save(registration);
    }
}

package com.example.mosaic.Registration.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mosaic.Registration.Entity.Register;

public interface RegisterRepo extends JpaRepository<Register, Integer> {
}

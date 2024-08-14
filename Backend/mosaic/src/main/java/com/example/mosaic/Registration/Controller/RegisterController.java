package com.example.mosaic.Registration.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.mosaic.Registration.Entity.Register;
import com.example.mosaic.Registration.Service.RegisterService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegisterController {

    @Autowired
    private RegisterService registrationService;

    @PostMapping("/participate")
    public Register register(@RequestBody Register registration) {
        return registrationService.saveRegistration(registration);
    }
}

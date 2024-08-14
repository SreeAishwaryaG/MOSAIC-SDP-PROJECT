package com.example.mosaic.JoinPage.CodingClub.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.mosaic.JoinPage.CodingClub.Entity.Coding;
import com.example.mosaic.JoinPage.CodingClub.Repo.CodingRepo;

@Service
public class CodingService {

    @Autowired
    private CodingRepo repo;

    @Autowired
    private JavaMailSender emailSender;

    public void joinClub(Coding coding) {

        repo.save(coding);

        sendWelcomeEmail(coding);
    }

    public long getActiveUsersCount() {
        return repo.count();
    }

    private void sendWelcomeEmail(Coding coding) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(coding.getEmail());
        message.setSubject("Welcome to the " + coding.getClubName() + " Club!");
        message.setText("Hi " + coding.getFullName() + ",\n\nThank you for joining the " + coding.getClubName()
                + " Club.\n\nBest regards,\nThe Club Team");
        emailSender.send(message);
    }
}

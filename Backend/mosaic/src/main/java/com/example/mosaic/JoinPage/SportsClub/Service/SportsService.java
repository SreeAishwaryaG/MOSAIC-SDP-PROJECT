package com.example.mosaic.JoinPage.SportsClub.Service;

import com.example.mosaic.JoinPage.SportsClub.Entity.Sports;
import com.example.mosaic.JoinPage.SportsClub.Repo.SportsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
public class SportsService {

    @Autowired
    private SportsRepo sportsRepository;

    @Autowired
    private JavaMailSender emailSender;

    public void joinClub(Sports sports) {
        sports.setJoinedDate(new Date()); // Set the joined date before saving the entity
        sportsRepository.save(sports);
        sendWelcomeEmail(sports);
    }

    public List<Integer> getActiveUsersCountByMonth() {

        List<Integer> activeUsersByMonth = new ArrayList<>(Collections.nCopies(12, 0));

        for (Sports sports : sportsRepository.findAll()) {
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(sports.getJoinedDate());
            int month = calendar.get(Calendar.MONTH); // 0-based month index
            activeUsersByMonth.set(month, activeUsersByMonth.get(month) + 1);
        }

        return activeUsersByMonth;
    }

    public long getActiveUsersCount() {
        return sportsRepository.count();
    }

    private void sendWelcomeEmail(Sports sports) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(sports.getEmail());
        message.setSubject("Welcome to the Sports Club!");
        message.setText("Hi " + sports.getFullName()
                + ",\n\nThank you for joining the sports club.\n\nBest regards,\nThe Club Team");
        emailSender.send(message);
    }

    public void leaveClub(long sportsId) {
        Sports sports = sportsRepository.findById(sportsId)
                .orElseThrow(() -> new RuntimeException("Sports entity not found"));
        sports.setLeftDate(new Date()); // Set the left date when a user leaves the club
        sportsRepository.save(sports);
    }
}

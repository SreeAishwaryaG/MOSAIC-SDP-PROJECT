package com.example.mosaic.JoinPage.ArtsClub.Service;

import com.example.mosaic.JoinPage.ArtsClub.Entity.Arts;
import com.example.mosaic.JoinPage.ArtsClub.Repo.ArtsRepo;
import com.example.mosaic.JoinPage.LiteratureClub.Entity.Literature;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ArtsService {

    @Autowired
    private ArtsRepo repo;

    @Autowired
    private JavaMailSender emailSender;

    public void joinClub(Arts arts) {

        repo.save(arts);

        sendWelcomeEmail(arts);
    }

    public long getActiveUsersCount() {
        return repo.count();
    }

    public List<Integer> getActiveUsersCountByMonth() {

        List<Integer> activeUsersByMonth = new ArrayList<>(Collections.nCopies(12, 0));

        for (Arts arts : repo.findAll()) {
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(arts.getJoinedDate());
            int month = calendar.get(Calendar.MONTH); // 0-based month index
            activeUsersByMonth.set(month, activeUsersByMonth.get(month) + 1);
        }

        return activeUsersByMonth;
    }

    private void sendWelcomeEmail(Arts arts) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(arts.getEmail());
        message.setSubject("Welcome to the " + arts.getClubName() + " Club!");
        message.setText("Hi " + arts.getFullName() + ",\n\nThank you for joining the " + arts.getClubName()
                + " Club.\n\nBest regards,\nThe Club Team");
        emailSender.send(message);
    }
}

package com.example.mosaic.JoinPage.LiteratureClub.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.mosaic.JoinPage.LiteratureClub.Entity.Literature;
import com.example.mosaic.JoinPage.LiteratureClub.Repo.LiteratureRepo;
import com.example.mosaic.JoinPage.MusicClub.Entity.Music;

@Service
public class LiteratureService {

    @Autowired
    private LiteratureRepo repo;

    @Autowired
    private JavaMailSender emailSender;

    public void joinClub(Literature literature) {

        repo.save(literature);
        sendWelcomeEmail(literature);
    }

    public long getActiveUsersCount() {
        return repo.count();
    }

    public List<Integer> getActiveUsersCountByMonth() {
        List<Integer> activeUsersByMonth = new ArrayList<>(Collections.nCopies(12, 0));

        for (Literature literature : repo.findAll()) {
            Date joinedDate = literature.getJoinedDate();
            if (joinedDate != null) { // Check if joinedDate is not null
                Calendar calendar = Calendar.getInstance();
                calendar.setTime(joinedDate);
                int month = calendar.get(Calendar.MONTH); // 0-based month index
                activeUsersByMonth.set(month, activeUsersByMonth.get(month) + 1);
            }
        }

        return activeUsersByMonth;
    }

    private void sendWelcomeEmail(Literature literature) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(literature.getEmail());
        message.setSubject("Welcome to the " + literature.getClubName() + " Club!");
        message.setText("Hi " + literature.getFullName() + ",\n\nThank you for joining the " + literature.getClubName()
                + " Club.\n\nBest regards,\nThe Club Team");
        emailSender.send(message);
    }

    public void leaveClub(long literatureid) {
        Literature literature = repo.findById(literatureid)
                .orElseThrow(() -> new RuntimeException("Sports entity not found"));
        literature.setLeftDate(new Date()); // Set the left date when a user leaves the club
        repo.save(literature);
    }
}

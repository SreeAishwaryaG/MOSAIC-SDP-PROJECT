package com.example.mosaic.JoinPage.MusicClub.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.mosaic.JoinPage.MusicClub.Entity.Music;
import com.example.mosaic.JoinPage.MusicClub.Repo.MusicRepo;

@Service
public class MusicService {

    @Autowired
    private MusicRepo repo;

    @Autowired
    private JavaMailSender emailSender;

    public void joinClub(Music music) {

        repo.save(music);

        sendWelcomeEmail(music);
    }

    public long getActiveUsersCount() {
        return repo.count();
    }

    private void sendWelcomeEmail(Music music) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(music.getEmail());
        message.setSubject("Welcome to the " + music.getClubName() + " Club!");
        message.setText("Hi " + music.getFullName() + ",\n\nThank you for joining the " + music.getClubName()
                + " Club.\n\nBest regards,\nThe Club Team");
        emailSender.send(message);
    }

    public List<Integer> getActiveUsersCountByMonth() {

        List<Integer> activeUsersByMonth = new ArrayList<>(Collections.nCopies(12, 0));

        for (Music music : repo.findAll()) {
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(music.getJoinedDate());
            int month = calendar.get(Calendar.MONTH); // 0-based month index
            activeUsersByMonth.set(month, activeUsersByMonth.get(month) + 1);
        }

        return activeUsersByMonth;
    }

    public void leaveClub(long musicId) {
        Music music = repo.findById(musicId)
                .orElseThrow(() -> new RuntimeException("Sports entity not found"));
        music.setLeftDate(new Date());
        repo.save(music);
    }
}

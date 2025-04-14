package com.example.backend.service;

import com.example.backend.model.Coach;

import com.example.backend.repositories.CoachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoachService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    private final CoachRepository coachRepository;


    public Coach saveCoach(Coach coach) {
        return coachRepository.save(coach);
    }

    public Coach findByUsername(String username) {

        return coachRepository.findCoachByInfoCoachInfo_Username(username);
    }

    public Coach findByPassword(String password){

        return coachRepository.findCoachByInfoCoachInfo_Password(password);
    }
    @Autowired
    public CoachService(CoachRepository coachRepository) {

        this.coachRepository = coachRepository;
    }

    public boolean login (String username, String frontEndPwd){
        Coach coachUsername = coachRepository.findCoachByInfoCoachInfo_Username(username);
        Coach coachPassword = coachRepository.findCoachByInfoCoachInfo_Password(frontEndPwd);

        if (coachPassword.getInfoCoachInfo().getPassword().equals(frontEndPwd) && (coachUsername.getInfoCoachInfo().getUsername().equals(username))){
            return true;
        }
        return false;
    }
    public List<Coach> findAll(){

        return coachRepository.findAll();
    }

    public Coach getCoach(Coach coach) {

        return coachRepository.save(coach);
    }


}

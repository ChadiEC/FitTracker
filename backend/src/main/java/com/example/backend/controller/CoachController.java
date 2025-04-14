package com.example.backend.controller;

import com.example.backend.model.Coach;
import com.example.backend.repositories.CoachRepository;
import com.example.backend.service.CoachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/clCoach")
@CrossOrigin

public class CoachController {




    @Autowired
    CoachService serviceCoach;

    @GetMapping("/getAllCoaches")
    public List<Coach> getAll(){

        return serviceCoach.findAll();
    }

    @GetMapping("/getCoach")
    public Coach getCoach(@RequestParam String password){

        return serviceCoach.findByPassword(password);
    }
    
    @PostMapping("/createCoach")
    public Coach addNewCoach (@RequestBody Coach coach){
        System.out.println("Received Coach: " + coach);
        serviceCoach.saveCoach(coach);
        return coach;
    }


    @GetMapping("/loginCoach")
    public Boolean getCoach(@RequestParam String username, @RequestParam String password){
        if (serviceCoach.login(username,password)){
            return true;
        }
        else {
            return false;
        }

    }
}


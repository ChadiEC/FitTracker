package com.example.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Coach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCoach;
    private String fname;
    private String lname;
    private String email;
    private Long nbrClient;
    private Long anneeExp;
    private boolean isMealTrainer;
    private boolean isWorkoutTrainer;


}

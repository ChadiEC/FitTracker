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
    private String nbrClient;
    private String  anneeExp;

    private boolean isMealTrainer;
    private boolean isWorkoutTrainer;

    public InfoCoachInfo getInfoCoachInfo() {
        return infoCoachInfo;
    }

    public void setInfoCoachInfo(InfoCoachInfo infoCoachInfo) {
        this.infoCoachInfo = infoCoachInfo;
    }

    public Long getIdCoach() {
        return idCoach;
    }

    public void setIdCoach(Long idCoach) {
        this.idCoach = idCoach;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNbrClient() {
        return nbrClient;
    }

    public void setNbrClient(String nbrClient) {
        this.nbrClient = nbrClient;
    }

    public String getAnneeExp() {
        return anneeExp;
    }

    public void setAnneeExp(String anneeExp) {
        this.anneeExp = anneeExp;
    }

    public boolean isMealTrainer() {
        return isMealTrainer;
    }

    public void setMealTrainer(boolean mealTrainer) {
        isMealTrainer = mealTrainer;
    }

    public boolean isWorkoutTrainer() {
        return isWorkoutTrainer;
    }

    public void setWorkoutTrainer(boolean workoutTrainer) {
        isWorkoutTrainer = workoutTrainer;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idCoachInfo")
    InfoCoachInfo infoCoachInfo;


}

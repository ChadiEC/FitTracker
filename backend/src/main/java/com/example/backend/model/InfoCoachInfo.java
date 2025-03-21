package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class InfoCoachInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClientInfo;
    private String username;
    private String password;

    public Coach getCoach() {
        return coach;
    }

    public void setCoach(Coach coach) {
        this.coach = coach;
    }

    public Long getIdClientInfo() {
        return idClientInfo;
    }

    public void setIdClientInfo(Long idClientInfo) {
        this.idClientInfo = idClientInfo;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @OneToOne
    @JoinColumn(name = "idCoach")
    Coach coach;
}

package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class Entrainement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEntrainement;
    private String nom;
    private String exercice;

    public Coach getCoach() {
        return coach;
    }

    public void setCoach(Coach coach) {
        this.coach = coach;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Long getIdEntrainement() {
        return idEntrainement;
    }

    public void setIdEntrainement(Long idEntrainement) {
        this.idEntrainement = idEntrainement;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getExercice() {
        return exercice;
    }

    public void setExercice(String exercice) {
        this.exercice = exercice;
    }

    @ManyToOne
    @JoinColumn(name = "idCoach")
    Coach coach;

    @ManyToOne
    @JoinColumn(name = "idClient")
    Client client;
}

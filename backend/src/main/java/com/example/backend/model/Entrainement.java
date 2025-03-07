package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class Entrainement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEntrainement;
    private String nom;
    private String exercice;


}

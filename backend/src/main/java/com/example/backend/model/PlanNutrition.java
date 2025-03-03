package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class PlanNutrition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlanNutrition;
    private String plat;

    @ManyToOne
    Client client;
}

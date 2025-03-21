package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class PlanNutrition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlanNutrition;
    private String plat;

    public Long getIdPlanNutrition() {
        return idPlanNutrition;
    }

    public void setIdPlanNutrition(Long idPlanNutrition) {
        this.idPlanNutrition = idPlanNutrition;
    }

    public String getPlat() {
        return plat;
    }

    public void setPlat(String plat) {
        this.plat = plat;
    }


}

package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class InfoClientInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClientInfo;
    private Long age;
    private Double weight;
    private Long height;

    @OneToOne
    Client client;
}

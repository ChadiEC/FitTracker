package com.example.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Client extends Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;
    private String fname;
    private String lname;
    private String email;
    private String address;
    private String postalCode;
    private String phoneNumber;

    @ManyToOne
    Coach coach;
}

package com.example.backend.model;

import jakarta.persistence.*;


import java.util.List;

@Entity
public class Client  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;
    private String fname;
    private String lname;
    private String email;
    private String address;
    private String postalCode;
    private String phoneNumber;

    public InfoClientInfo getInfoClientInfo() {
        return infoClientInfo;
    }

    public void setInfoClientInfo(InfoClientInfo infoClientInfo) {
        this.infoClientInfo = infoClientInfo;
    }

    public Coach getCoach() {
        return coach;
    }

    public void setCoach(Coach coach) {
        this.coach = coach;
    }

    public Long getIdClient() {
        return idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idInfoClient")
    InfoClientInfo infoClientInfo;

    @ManyToOne
    @JoinColumn(name = "idCoach")
    Coach coach;

}

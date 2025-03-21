package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class InfoClientInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClientInfo;
    private String username;
    private String password;
    private Long age;
    private Double weight;
    private Long height;

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
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

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Long getHeight() {
        return height;
    }

    public void setHeight(Long height) {
        this.height = height;
    }

    @OneToOne
    @JoinColumn(name = "idClient")
    Client client;
}

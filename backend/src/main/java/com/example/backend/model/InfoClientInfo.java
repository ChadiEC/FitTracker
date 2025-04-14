package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class InfoClientInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClientInfo;
    private String username;
    private String password;
    private String age;
    private String weight;
    private String height;

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

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    @OneToOne(mappedBy = "infoClientInfo")
    private Client client;
}

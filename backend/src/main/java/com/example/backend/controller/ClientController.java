package com.example.backend.controller;

import com.example.backend.model.Client;
import com.example.backend.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cl")
@CrossOrigin
public class ClientController {

    @Autowired
    ClientRepository repo;

    @GetMapping("/getAllClients")
    public List<Client> getAll(){
        return repo.findAll();
    }
    @PostMapping("/createClient")
    public Client addNewCustomer (@RequestBody Client client){
        repo.save(client);
        return client;
    }
}

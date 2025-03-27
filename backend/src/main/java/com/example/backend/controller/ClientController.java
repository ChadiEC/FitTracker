package com.example.backend.controller;

import com.example.backend.model.Client;
import com.example.backend.repositories.ClientRepository;
import com.example.backend.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cl")
@CrossOrigin
public class ClientController {

    @Autowired
    ClientRepository repo;

    @Autowired
    ClientService service;

    @GetMapping("/getAllClients")
    public List<Client> getAll(){

        return repo.findAll();
    }

    @GetMapping("/getClient")
    public Client getClient(@RequestParam String password){
        return repo.findClientsByInfoClientInfo_Password(password);
    }
    @PostMapping("/createClient")
    public Client addNewCustomer (@RequestBody Client client){
        repo.save(client);
        System.out.println("Received client: " + client);
        return client;
    }

   // @GetMapping("/getUser")
   // public Client getUser(@RequestBody Client client){
    //}
    @GetMapping("/login")
    public Boolean getUser(@RequestParam String username, @RequestParam String password){
        if (service.login(username,password)){
            return true;

        }
        else {
            return false;
        }

    }
}

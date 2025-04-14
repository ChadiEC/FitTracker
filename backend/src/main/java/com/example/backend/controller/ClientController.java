package com.example.backend.controller;

import com.example.backend.model.Client;
import com.example.backend.model.Coach;
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
    ClientService serviceClient;

    @GetMapping("/getAllClients")
    public List<Client> getAll(){

        return serviceClient.findAll();
    }

    @GetMapping("/getClient")
    public Client getClient(@RequestParam String password){
        return serviceClient.findByPassword(password);
    }
    @PostMapping("/createClient")
    public Client addNewCustomer (@RequestBody Client client){
        System.out.println("Received client: " + client);
        serviceClient.saveClient(client);
        return client;
    }


    @GetMapping("/login")
    public Boolean getUser(@RequestParam String username, @RequestParam String password){
        if (serviceClient.login(username,password)){
            return true;

        }
        else {
            return false;
        }

    }

    @PutMapping("/clientput")
    Client updateCustomer(@RequestBody Client newOne, @RequestParam String password) {
        Client c = serviceClient.findByPassword(password);
                    c.setFname(newOne.getPhoneNumber());
                    c.setLname(newOne.getEmail());
                    c.setEmail(newOne.getAddress());
                    c.setPostalCode(newOne.getPostalCode());
                    c.getInfoClientInfo().setPassword(newOne.getInfoClientInfo().getPassword());
                    return serviceClient.saveClient(c);

    }

    @GetMapping("/client/{id}")
    public Client getCustomerById(@PathVariable Long id) {
        return serviceClient.findById(id);
    }

}

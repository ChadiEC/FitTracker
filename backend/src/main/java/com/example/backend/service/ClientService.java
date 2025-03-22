package com.example.backend.service;

import com.example.backend.model.Client;
import com.example.backend.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    private final ClientRepository clientRepository;


    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    public Client findByUsername(String username) {
        return clientRepository.findClientsByInfoClientInfo_Username(username);
    }

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public boolean login (String username, String frontEndPwd){
        Client client = clientRepository.findClientsByInfoClientInfo_Username(username);

        if (client.getInfoClientInfo().getPassword().equals(frontEndPwd)){
            return true;
        }
        return false;
    }
}

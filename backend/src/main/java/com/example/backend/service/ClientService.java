package com.example.backend.service;

import com.example.backend.model.Client;
import com.example.backend.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Client findByPassword(String password){
        return clientRepository.findClientsByInfoClientInfo_Password(password);
    }

    public Client findById(Long id){
        return clientRepository.findClientByIdClient(id);
    }

    @Autowired
    public ClientService(ClientRepository clientRepository) {

        this.clientRepository = clientRepository;
    }

    public boolean login (String username, String frontEndPwd){
        Client clientUsername = clientRepository.findClientsByInfoClientInfo_Username(username);
        Client clientPassword = clientRepository.findClientsByInfoClientInfo_Password(frontEndPwd);

        if (clientPassword.getInfoClientInfo().getPassword().equals(frontEndPwd) && (clientUsername.getInfoClientInfo().getUsername().equals(username))){
            return true;
        }
        return false;
    }

    public List<Client> findAll(){
        return clientRepository.findAll();
    }

    public Client getClient(Client client){

        return clientRepository.save(client);
    }


}

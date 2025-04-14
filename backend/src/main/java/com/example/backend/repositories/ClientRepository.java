package com.example.backend.repositories;

import com.example.backend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
    Client findClientsByInfoClientInfo_Username(String username);

    Client findClientsByInfoClientInfo_Password(String Password);

    Client findClientByIdClient(Long idClient);
}

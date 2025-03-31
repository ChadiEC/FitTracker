package com.example.backend.repositories;

import com.example.backend.model.Coach;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoachRepository extends JpaRepository<Coach,Long> {

    Coach findCoachByInfoCoachInfo_Username(String username);

    Coach findCoachByInfoCoachInfo_Password(String Password);
}

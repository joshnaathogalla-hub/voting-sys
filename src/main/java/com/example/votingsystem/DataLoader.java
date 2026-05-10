package com.example.votingsystem;

import com.example.votingsystem.model.Candidate;
import com.example.votingsystem.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private CandidateRepository repo;

    @Override
    public void run(String... args) {
        if (repo.count() == 0) {
            for (int i = 1; i <= 8; i++) {
                Candidate c = new Candidate();
                c.setName("Candidate " + i);
                c.setVotes(0);
                repo.save(c);
            }
        }
    }
}
package com.example.votingsystem.service;

import com.example.votingsystem.model.*;
import com.example.votingsystem.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoteService {

    @Autowired
    private CandidateRepository candidateRepo;

    @Autowired
    private UserRepository userRepo;

    public String castVote(String voterId, Long candidateId) {

        User user = userRepo.findByVoterId(voterId)
                .orElseThrow(() -> new RuntimeException("Invalid Voter"));

        if (user.isHasVoted()) {
            return "Already voted!";
        }

        Candidate c = candidateRepo.findById(candidateId)
                .orElseThrow(() -> new RuntimeException("Candidate not found"));

        c.setVotes(c.getVotes() + 1);
        user.setHasVoted(true);

        candidateRepo.save(c);
        userRepo.save(user);

        return "Vote successful";
    }

    public List<Candidate> results() {
        return candidateRepo.findAll();
    }
}
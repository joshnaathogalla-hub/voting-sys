package com.example.votingsystem.controller;

import com.example.votingsystem.model.Candidate;
import com.example.votingsystem.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/vote")
public class VoteController {

    @Autowired
    private VoteService service;

    @PostMapping("/cast")
    public String vote(@RequestParam String voterId,
                       @RequestParam Long candidateId) {
        return service.castVote(voterId, candidateId);
    }

    @GetMapping("/results")
    public List<Candidate> results() {
        return service.results();
    }
}

package com.example.votingsystem.controller;

import com.example.votingsystem.model.User;
import com.example.votingsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public Optional<User> login(@RequestBody User user) {
        return service.login(user.getEmail(), user.getPassword());
    }
}

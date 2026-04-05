package com.virappan.experiment7;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/public/hello")
    public ResponseEntity<?> publicEndpoint() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "This is a public endpoint. Anyone can see this!");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/profile")
    public ResponseEntity<?> userEndpoint() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome, Virappan! You are logged in as a USER.");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/admin/dashboard")
    public ResponseEntity<?> adminEndpoint() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome to the Admin Dashboard, Vishav! Only you have access here.");
        return ResponseEntity.ok(response);
    }
}
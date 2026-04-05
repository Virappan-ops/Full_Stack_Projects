package com.virappan.experiment7;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataSeeder(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // Create USER (Virappan)
        if (userRepository.findByUsername("virappan").isEmpty()) {
            userRepository.save(new User("virappan", passwordEncoder.encode("virappan123"), "ROLE_USER"));
        }
        // Create ADMIN (Vishav)
        if (userRepository.findByUsername("vishav").isEmpty()) {
            userRepository.save(new User("vishav", passwordEncoder.encode("vishav123"), "ROLE_ADMIN"));
        }
    }
}
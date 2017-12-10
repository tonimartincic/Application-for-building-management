package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.User;
import hr.fer.opp.eureka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/api/users")
  public List<User> getAllUsers() {
    return userService.getAll();
  }

  @GetMapping("/api/users/{id}")
  public User getUserById(@PathVariable Long id) {
    return userService.getById(id);
  }

  @PostMapping("/api/users")
  public User addNewUser(@RequestBody final User user) {
    return userService.add(user);
  }
}

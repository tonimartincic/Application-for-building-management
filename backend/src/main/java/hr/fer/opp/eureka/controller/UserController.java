package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.User;
import hr.fer.opp.eureka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping ("/api/users")
  public List<User> getAllUsers() {
    return this.userService.getAll();
  }

  @GetMapping ("/api/users/{id}")
  public User getUserById(@PathVariable final String id) {
    return this.userService.getUserById(id);
  }
}

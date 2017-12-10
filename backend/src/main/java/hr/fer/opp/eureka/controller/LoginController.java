package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.User;
import hr.fer.opp.eureka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

  @Autowired
  UserService userService;

  public LoginController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/api/login")
  public User validateUser (@RequestBody final User user) {
    User userTemp = userService.validateUser(user.getMail(), user.getPassword());
    return userTemp;
  }
}

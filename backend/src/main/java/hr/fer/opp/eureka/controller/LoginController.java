package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.domain.user.UserResponse;
import hr.fer.opp.eureka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

  @Autowired
  private UserService userService;

  public LoginController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/api/login")
  public UserResponse validateUser (@RequestBody final User user) {
    return userService.validateUser(user.getMail(), user.getPassword());
  }
}

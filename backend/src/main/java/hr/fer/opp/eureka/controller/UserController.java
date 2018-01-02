package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.domain.user.UserRequest;
import hr.fer.opp.eureka.domain.user.UserResponse;
import hr.fer.opp.eureka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/api/users")
  public List<UserResponse> getAllUsers() {
    return userService.getAll();
  }

  @GetMapping("/api/users/{id}")
  public UserResponse getUserById(@PathVariable Long id) {
    return userService.getById(id);
  }

  @PostMapping("/api/users")
  public UserResponse addNewUser(@RequestBody final UserRequest userRequest) {
    return userService.add(userRequest);
  }

  @PostMapping("/api/users/edit")
  public UserResponse editUser(@RequestBody final UserRequest userRequest) {
    return userService.edit(userRequest);
  }

  @DeleteMapping("/api/users/{id}")
  public void deleteUserById(@PathVariable Long id) {
    userService.deleteById(id); }
}

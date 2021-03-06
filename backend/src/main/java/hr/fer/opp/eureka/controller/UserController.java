package hr.fer.opp.eureka.controller;

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
    return this.userService.getById(id);
  }

  @PostMapping("/api/users/{apartmentId}")
  public UserResponse addNewUser(@RequestBody final UserRequest userRequest, @PathVariable Long apartmentId) {
    return userService.add(userRequest, apartmentId);
  }

  @PutMapping("/api/users/edit")
  public UserResponse editUser(@RequestBody final UserRequest userRequest) {
    return this.userService.edit(userRequest);
  }

  @PutMapping("/api/users/edit-password")
  public UserResponse editUserPassword(@RequestBody final UserRequest userRequest) {
    return this.userService.editPassword(userRequest);
  }

  @DeleteMapping("/api/users/{id}")
  public void deleteUserById(@PathVariable Long id) {
    this.userService.deleteById(id);
  }

  @PutMapping("/api/users/{id}")
  public UserResponse toggleReminderValue(@PathVariable Long id) {
    return this.userService.toggleReminderValue(id);
  }

  @PostMapping("/api/users/administrator")
  public UserResponse addNewAdministrator(@RequestBody final UserRequest userRequest) {
    return userService.add(userRequest);
  }

  @PostMapping("/api/users/contractor")
  public UserResponse addNewContractor(@RequestBody final UserRequest userRequest) {
    return userService.add(userRequest);
  }
}

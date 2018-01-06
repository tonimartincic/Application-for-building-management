package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.user.UserRequest;
import hr.fer.opp.eureka.domain.user.UserResponse;

import java.util.List;

public interface UserService {

  List<UserResponse> getAll();

  UserResponse getById(Long id);

  UserResponse validateUser(String mail, String password);

  UserResponse add(UserRequest userRequest, Long apartmentId);

  UserResponse add(UserRequest userRequest);

  UserResponse getByMail(String mail);

  UserResponse edit(UserRequest userRequest);

  UserResponse editPassword(UserRequest userRequest);

  UserResponse toggleReminderValue(Long id);

  void deleteById(Long id);
}

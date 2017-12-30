package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.User;

import java.util.List;

public interface UserService {

  List<User> getAll();

  User getById(Long id);

  User validateUser(String mail, String password);

  User add(User user);

  User getByMail(String mail);

  User edit(User user);

  void deleteById(Long id);
}

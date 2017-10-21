package hr.fer.opp.eureka.service.impl;

import hr.fer.opp.eureka.domain.User;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

  UserRepository userRepository;

  @Autowired
  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public List<User> getAll() {
    List<User> temp = new ArrayList<>();
    Iterable<User> allUsers = userRepository.findAll();

    for ( User oth : allUsers ) {
      temp.add(oth);
    }

    return temp;
  }

  @Override
  public User getUserById(String id) {
    return userRepository.findById(id);
  }
}

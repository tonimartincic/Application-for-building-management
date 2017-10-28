package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.User;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public List<User> getAll() {
    return Lists.newArrayList(userRepository.findAll());
  }

  @Override
  public User getById(Long id) {
    return userRepository.findById(id);
  }

  @Override
  public User add(User user) {
    return this.userRepository.save(user);
  }
}

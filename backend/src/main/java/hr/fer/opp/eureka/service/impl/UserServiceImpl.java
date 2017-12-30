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
  public User validateUser(String mail, String password) {
    return userRepository.findByMailAndPassword(mail, password);
  }

  @Override
  public User add(User user) {
    return this.userRepository.save(user);
  }

  @Override
  public User getByMail(String mail) {
    return this.userRepository.findByMail(mail);
  }

  @Override
  public User edit(User user) {
    User userFromDatabase = this.userRepository.findById(user.getId());
    userFromDatabase.setFirstName(user.getFirstName());
    userFromDatabase.setLastName(user.getLastName());
    userFromDatabase.setMail(user.getMail());
    userFromDatabase.setPrivilege(user.getPrivilege());

    return this.userRepository.save(userFromDatabase);
  }

  @Override
  public void deleteById(Long id) {
    this.userRepository.delete(id);
  }
}

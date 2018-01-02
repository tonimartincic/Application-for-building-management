package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.cost.CostResponse;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.domain.user.UserResponse;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public List<UserResponse> getAll() {
    return getUserResponses(Lists.newArrayList(userRepository.findAll()));
  }

  @Override
  public UserResponse getById(Long id) {
    return getUserResponse(userRepository.findById(id));
  }

  @Override
  public UserResponse validateUser(String mail, String password) {
    return getUserResponse(userRepository.findByMailAndPassword(mail, password));
  }

  @Override
  public UserResponse add(User user) {
    return getUserResponse(this.userRepository.save(user));
  }

  @Override
  public UserResponse getByMail(String mail) {
    return getUserResponse(this.userRepository.findByMail(mail));
  }

  @Override
  public UserResponse edit(User user) {
    User userFromDatabase = this.userRepository.findById(user.getId());

    userFromDatabase.setFirstName(user.getFirstName());
    userFromDatabase.setLastName(user.getLastName());
    userFromDatabase.setMail(user.getMail());
    userFromDatabase.setPrivilege(user.getPrivilege());

    return getUserResponse(this.userRepository.save(userFromDatabase));
  }

  @Override
  public void deleteById(Long id) {
    this.userRepository.delete(id);
  }

  private List<UserResponse> getUserResponses(List<User> users) {
    List<UserResponse> userResponses = new ArrayList<>();

    for(User user : users) {
      userResponses.add(getUserResponse(user));
    }

    return userResponses;
  }

  private UserResponse getUserResponse(User user) {
    return new UserResponse(user);
  }
}

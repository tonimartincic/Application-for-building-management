package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

  User findById(Long id);

  User findByMailAndPassword(String mail, String password);
}

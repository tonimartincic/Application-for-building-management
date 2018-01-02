package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.Building;
import hr.fer.opp.eureka.domain.user.User;

import java.util.List;

public interface BuildingService {

  List<Building> getAll();

  Building getById(Long id);

  Building add(Building building);

  List<User> getAllUsersByBuildingId(Long id);
}

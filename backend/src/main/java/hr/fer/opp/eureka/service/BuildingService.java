package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.domain.user.UserResponse;

import java.util.List;

public interface BuildingService {

  List<Building> getAll();

  Building getById(Long id);

  Building add(Building building);

  List<UserResponse> getAllUsersByBuildingId(Long id);

  List<UserResponse> getAllUsersForCurrentUser(Long id);

  void deleteById(Long id);

  Building getBuildingForUser(Long currentUserId);

  Building editFunds(Building building);

  Building editFundsForUser(Long amount, Long userId);
}

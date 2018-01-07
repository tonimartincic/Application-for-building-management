package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.apartment.Apartment;
import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.domain.user.UserResponse;
import hr.fer.opp.eureka.enumeration.UserPrivilege;
import hr.fer.opp.eureka.repository.ApartmentRepository;
import hr.fer.opp.eureka.repository.BuildingRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BuildingServiceImpl implements BuildingService {

  private final BuildingRepository buildingRepository;

  private final ApartmentRepository apartmentRepository;

  private final UserRepository userRepository;

  @Autowired
  public BuildingServiceImpl(
    BuildingRepository buildingRepository,
    ApartmentRepository apartmentRepository,
    UserRepository userRepository) {

    this.buildingRepository = buildingRepository;
    this.apartmentRepository = apartmentRepository;
    this.userRepository = userRepository;
  }

  @Override
  public List<Building> getAll() {
    return Lists.newArrayList(buildingRepository.findAll());
  }

  @Override
  public Building getById(Long id) {
    return buildingRepository.findById(id);
  }

  @Override
  public Building add(Building building) {
    return this.buildingRepository.save(building);
  }

  @Override
  public List<UserResponse> getAllUsersByBuildingId(Long id) {
    Iterable<Apartment> apartmentList = apartmentRepository.findAll();
    List<UserResponse> users = new ArrayList<>();

    for(Apartment apartment : apartmentList){
      if (apartment.getBuilding().getId() == id && apartment.getOwner() != null) {
        users.add(new UserResponse(apartment.getOwner()));
      }
    }

    return users;
  }

  @Override
  public Building getBuildingForUser(Long currentUserId) {
    User currentUser = this.userRepository.findById(currentUserId);
    Building currentUserBuilding;

    if(currentUser.getPrivilege().equals(UserPrivilege.MANAGER)) {
      currentUserBuilding = (Building) currentUser.getManagerBuildingSet().toArray()[0];
    } else {
      if(currentUser.getApartments().isEmpty()) {
        return null;
      }

      currentUserBuilding = ((Apartment) currentUser.getApartments().toArray()[0]).getBuilding();
    }

    return currentUserBuilding;
  }
}

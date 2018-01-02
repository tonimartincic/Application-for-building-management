package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.Apartment;
import hr.fer.opp.eureka.domain.Building;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.repository.ApartmentRepository;
import hr.fer.opp.eureka.repository.BuildingRepository;
import hr.fer.opp.eureka.service.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class BuildingServiceImpl implements BuildingService {

  private final BuildingRepository buildingRepository;
  private final ApartmentRepository apartmentRepository;

  @Autowired
  public BuildingServiceImpl(BuildingRepository buildingRepository, ApartmentRepository apartmentRepository) {

    this.buildingRepository = buildingRepository;
    this.apartmentRepository = apartmentRepository;
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
  public List<User> getAllUsersByBuildingId(Long id) {

    Iterable<Apartment> apartmentList = apartmentRepository.findAll();

    List<User> users = new ArrayList<>();

    for(Apartment apartment : apartmentList){
      if (apartment.getBuilding().getId() == id)
        users.add(apartment.getOwner());
    }

    return users;
  }
}

package hr.fer.opp.eureka.service.impl;

import hr.fer.opp.eureka.domain.Building;
import hr.fer.opp.eureka.repository.BuildingRepository;
import hr.fer.opp.eureka.service.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BuildingServiceImpl implements BuildingService {

  @Autowired
  BuildingRepository buildingRepository;

  @Autowired
  public BuildingServiceImpl(BuildingRepository buildingRepository) {
    this.buildingRepository = buildingRepository;
  }

  @Override
  public List<Building> getAll() {
    List<Building> temp = new ArrayList<>();
    Iterable<Building> allBuildings = buildingRepository.findAll();

    for ( Building oth : allBuildings ) {
      temp.add(oth);
    }

    return temp;
  }

  @Override
  public Building getById(Long id) {
    return buildingRepository.findById(id);
  }
}

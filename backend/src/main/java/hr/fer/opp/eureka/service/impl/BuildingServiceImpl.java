package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.Building;
import hr.fer.opp.eureka.repository.BuildingRepository;
import hr.fer.opp.eureka.service.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuildingServiceImpl implements BuildingService {

  private final BuildingRepository buildingRepository;

  @Autowired
  public BuildingServiceImpl(BuildingRepository buildingRepository) {
    this.buildingRepository = buildingRepository;
  }

  @Override
  public List<Building> getAll() {
    return Lists.newArrayList(buildingRepository.findAll());
  }

  @Override
  public Building getById(Long id) {
    return buildingRepository.findById(id);
  }
}

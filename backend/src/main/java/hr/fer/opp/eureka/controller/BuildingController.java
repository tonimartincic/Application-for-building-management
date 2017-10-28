package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.Building;
import hr.fer.opp.eureka.service.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BuildingController {

  BuildingService buildingService;

  @Autowired
  public BuildingController(BuildingService buildingService) {
    this.buildingService = buildingService;
  }

  @GetMapping("/api/buildings")
  public List<Building> getAllBuildings() {
    return this.buildingService.getAll();
  }

  @GetMapping ("/api/buildings/{id}")
  public Building getBuildingById(@PathVariable final Long id) {
    return this.buildingService.getById(id);
  }
}

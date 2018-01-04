package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.domain.user.UserResponse;
import hr.fer.opp.eureka.service.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BuildingController {

  private final BuildingService buildingService;

  @Autowired
  public BuildingController(final BuildingService buildingService) {
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

  @PostMapping("/api/buildings")
  public Building addNewBuilding(@RequestBody final Building building) {
    return buildingService.add(building);
  }

  @GetMapping("/api/building-users/{id}")
  public List<UserResponse> getAllUsersInBuilding(@PathVariable final Long id) {
    return this.buildingService.getAllUsersByBuildingId(id);
  }
}

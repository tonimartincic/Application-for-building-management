package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.Building;

import java.util.List;

public interface BuildingService {

  List<Building> getAll();

  Building getById(Long id);
}

package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.Cost;

import java.util.List;

public interface CostService {

  List<Cost> getAll();

  Cost getById(Long id);

  Cost addNewCost(Cost cost);

  void handleUrgentCosts();
}

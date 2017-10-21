package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.Cost;

import java.util.List;

public interface CostService {

  List<Cost> getAll();

  Cost getCostById(Long id);
}

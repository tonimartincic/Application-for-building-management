package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.cost.CostResponse;

import java.util.List;

public interface CostService {

  List<CostResponse> getAll();

  CostResponse getById(Long id);

  CostResponse add(Cost cost);
}

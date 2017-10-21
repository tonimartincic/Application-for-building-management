package hr.fer.opp.eureka.controller;


import hr.fer.opp.eureka.domain.Cost;
import hr.fer.opp.eureka.service.CostService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CostController {

  private final CostService costService;

  public CostController(CostService costService) {
    this.costService = costService;
  }
  @GetMapping("/api/costs")
  public List<Cost> getAllCosts() {
    return this.costService.getAll();
  }

  @GetMapping ("/api/costs/{id}")
  public Cost getCostById(@PathVariable final Long id) {
    return this.costService.getCostById(id);
  }
}

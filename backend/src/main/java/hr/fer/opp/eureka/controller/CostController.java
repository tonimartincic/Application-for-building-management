package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.Cost;
import hr.fer.opp.eureka.service.CostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CostController {

  private final CostService costService;

  public CostController(CostService costService) {
    this.costService = costService;
  }
  
  @GetMapping("/api/costs")
  public List<Cost> getAllCosts() {
    return costService.getAll();
  }

  @GetMapping ("/api/costs/{id}")
  public Cost getCostById(@PathVariable Long id) {
    return costService.getById(id);
  }

  @PostMapping ("/api/costs")
  public Cost addNewCost(@RequestBody final Cost cost) {
    return costService.addNewCost(cost);
  }
}

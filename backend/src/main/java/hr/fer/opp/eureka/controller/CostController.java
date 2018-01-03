package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.cost.CostRequest;
import hr.fer.opp.eureka.domain.cost.CostResponse;
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
  public List<CostResponse> getAllCosts() {
    return costService.getAll();
  }

  @GetMapping ("/api/costs/{id}")
  public CostResponse getCostById(@PathVariable Long id) {
    return costService.getById(id);
  }

  @PostMapping ("/api/costs")
  public CostResponse addNewCost(@RequestBody final CostRequest costRequest) {
    return costService.add(costRequest);
  }

  @PutMapping("/api/costs/edit")
  public CostResponse editCost(@RequestBody final CostRequest costRequest) {
    return this.costService.edit(costRequest);
  }

  @DeleteMapping("/api/costs/{id}")
  public void deleteCostById(@PathVariable Long id) {
    this.costService.deleteById(id);
  }
}

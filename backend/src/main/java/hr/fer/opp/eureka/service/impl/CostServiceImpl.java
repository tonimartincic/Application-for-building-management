package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.cost.CostRequest;
import hr.fer.opp.eureka.domain.cost.CostResponse;
import hr.fer.opp.eureka.repository.CostRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.BuildingService;
import hr.fer.opp.eureka.service.CostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class CostServiceImpl implements CostService {

  private final CostRepository costRepository;

  private final UserRepository userRepository;

  private final BuildingService buildingService;

  @Autowired
  public CostServiceImpl(
    CostRepository costRepository,
    UserRepository userRepository,
    BuildingService buildingService) {

    this.costRepository = costRepository;
    this.userRepository = userRepository;
    this.buildingService = buildingService;
  }

  @Override
  public List<CostResponse> getAllForCurrentUser(Long currentUserId) {
    Building currentUserBuilding = this.buildingService.getBuildingForUser(currentUserId);

    List<Cost> allCosts = Lists.newArrayList(this.costRepository.findAll());
    List<CostResponse> costResponsesForBuilding = new ArrayList<>();

    for(Cost cost : allCosts) {
      if(isNeededToAddCost(currentUserBuilding, cost)) {
        costResponsesForBuilding.add(getCostResponse(cost));
      }
    }

    return costResponsesForBuilding;
  }

  private boolean isNeededToAddCost(Building currentUserBuilding, Cost cost) {
    Building building = this.buildingService.getBuildingForUser(cost.getCreator().getId());

    if(building == null) {
      return false;
    }

    return building.equals(currentUserBuilding);
  }

  @Override
  public CostResponse getById(Long id) {
    return getCostResponse(costRepository.findById(id));
  }

  @Override
  public CostResponse add(CostRequest costRequest) {
    Cost cost = new Cost(costRequest);

    cost.setCreator(this.userRepository.findById(costRequest.getCreatorId()));
    cost.setCreatedOn(LocalDate.now());

    return getCostResponse(costRepository.save(cost));
  }

  @Override
  public CostResponse edit(CostRequest costRequest) {
    Cost cost = new Cost(costRequest);

    cost.setCreator(this.userRepository.findById(costRequest.getCreatorId()));

    return getCostResponse(costRepository.save(cost));
  }

  @Override
  public void deleteById(Long id) {
    this.costRepository.delete(id);
  }

  private List<CostResponse> getCostResponses(List<Cost> costs) {
    List<CostResponse> costResponses = new ArrayList<>();

    for(Cost cost : costs) {
      costResponses.add(getCostResponse(cost));
    }

    return costResponses;
  }

  private CostResponse getCostResponse(Cost cost) {
    return new CostResponse(cost);
  }
}

package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.cost.CostRequest;
import hr.fer.opp.eureka.domain.cost.CostResponse;
import hr.fer.opp.eureka.repository.CostRepository;
import hr.fer.opp.eureka.repository.UserRepository;
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

  @Autowired
  public CostServiceImpl(
    CostRepository costRepository,
    UserRepository userRepository) {

    this.costRepository = costRepository;
    this.userRepository = userRepository;
  }

  @Override
  public List<CostResponse> getAll() {
    return getCostResponses(Lists.newArrayList(costRepository.findAll()));
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

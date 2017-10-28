package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.Cost;
import hr.fer.opp.eureka.repository.CostRepository;
import hr.fer.opp.eureka.service.CostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CostServiceImpl implements CostService {

  private final CostRepository costRepository;

  @Autowired
  public CostServiceImpl(CostRepository costRepository) {
    this.costRepository = costRepository;
  }

  @Override
  public List<Cost> getAll() {
    return Lists.newArrayList(costRepository.findAll());
  }

  @Override
  public Cost getById(Long id) {
    return costRepository.findById(id);
  }
}

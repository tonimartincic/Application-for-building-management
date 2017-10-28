package hr.fer.opp.eureka.service.impl;

import hr.fer.opp.eureka.domain.Cost;
import hr.fer.opp.eureka.repository.BuildingRepository;
import hr.fer.opp.eureka.repository.CostRepository;
import hr.fer.opp.eureka.service.CostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    List<Cost> temp = new ArrayList<>();
    Iterable<Cost> allCosts = costRepository.findAll();

    for ( Cost oth : allCosts ) {
      temp.add(oth);
    }

    return temp;
  }

  @Override
  public Cost getCostById(Long id) {
    return this.costRepository.findById(id);
  }

  @Override
  public Cost addNewCost(Cost cost) {
    /*if(cost.getIsUrgent()==true){//dodaj u hitne troskove
      cost.setStatus("U obradi.");
      handleUrgentCosts();
    }else{//stavi na popis za suglasnost stanara
      cost.setStatus("Cekanje suglasnosti.");
    }*/

    return costRepository.save(cost);
  }
  @Override
  public void handleUrgentCosts(){//funkcija koja se brine za hitne troškove, atribut funds tablici BUILDING

  }

}

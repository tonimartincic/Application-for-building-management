package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.Apartment;
import hr.fer.opp.eureka.repository.ApartmentRepository;
import hr.fer.opp.eureka.service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApartmentServiceImpl implements ApartmentService {

  private final ApartmentRepository apartmentRepository;

  @Autowired
  public ApartmentServiceImpl(ApartmentRepository apartmentRepository) {
    this.apartmentRepository = apartmentRepository;
  }

  @Override
  public List<Apartment> getAll() {
    List<Apartment> apartments = Lists.newArrayList(apartmentRepository.findAll());
    return apartments;
  }

  @Override
  public Apartment getById(Long id) {
    return apartmentRepository.findById(id);
  }
}

package hr.fer.opp.eureka.service.impl;

import hr.fer.opp.eureka.domain.Apartment;
import hr.fer.opp.eureka.domain.Building;
import hr.fer.opp.eureka.repository.ApartmentRepository;
import hr.fer.opp.eureka.service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApartmentServiceImpl implements ApartmentService {

  ApartmentRepository apartmentRepository;

  @Autowired
  public ApartmentServiceImpl(ApartmentRepository apartmentRepository) {
    this.apartmentRepository = apartmentRepository;
  }


  @Override
  public Apartment getById(Long id) {
    return apartmentRepository.findById(id);
  }

  @Override
  public List<Apartment> getAll() {
    List<Apartment> temp = new ArrayList<>();
    Iterable<Apartment> allApartments = apartmentRepository.findAll();

    for ( Apartment oth : allApartments ) {
      temp.add(oth);
    }

    return temp;
  }
}

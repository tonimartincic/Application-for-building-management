package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.Apartment;

import java.util.List;

public interface ApartmentService {

  Apartment getById(Long id);

  List<Apartment> getAll();

}

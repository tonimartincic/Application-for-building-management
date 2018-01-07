package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.apartment.Apartment;

import java.util.List;

public interface ApartmentService {

  List<Apartment> getAll();

  Apartment getById(Long id);

  Apartment add(Apartment apartment);

  Apartment getByUserId(Long id);

  void deleteById(Long id);
}

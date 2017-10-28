package hr.fer.opp.eureka.service;
import hr.fer.opp.eureka.domain.Apartment;

import java.util.List;

import hr.fer.opp.eureka.domain.Apartment;

import java.util.List;

public interface ApartmentService {

  List<Apartment> getAll();

  Apartment getById(Long id);
}

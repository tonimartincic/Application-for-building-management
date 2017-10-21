package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.Apartment;
import hr.fer.opp.eureka.service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApartmentController {

  ApartmentService apartmentService;

  @Autowired
  public ApartmentController(ApartmentService apartmentService) {
    this.apartmentService = apartmentService;
  }

  @GetMapping("/api/apartments")
  public List<Apartment> getAllBuildings() {
    return this.apartmentService.getAll();
  }

  @GetMapping ("/api/apartments/{id}")
  public Apartment getApartmentById(@PathVariable final Long id) {
    return this.apartmentService.getById(id);
  }
}

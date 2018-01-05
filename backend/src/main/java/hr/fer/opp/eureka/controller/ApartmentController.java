package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.apartment.Apartment;
import hr.fer.opp.eureka.service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApartmentController {

  private final ApartmentService apartmentService;

  @Autowired
  public ApartmentController(ApartmentService apartmentService) {
    this.apartmentService = apartmentService;
  }

  @GetMapping("/api/apartments")
  public List<Apartment> getAllApartments() {
    return apartmentService.getAll();
  }

  @GetMapping ("/api/apartments/{id}")
  public Apartment getApartmentById(@PathVariable Long id) {
    return apartmentService.getById(id);
  }

  @PostMapping("/api/apartments")
  public Apartment addNewApartment(@RequestBody final Apartment apartment) {
    return apartmentService.add(apartment);
  }

  @GetMapping("/api/apartments/user/{id}")
  public Apartment getApartmentForCurrentUser(@PathVariable Long id) {
    return apartmentService.getByUserId(id); }
}

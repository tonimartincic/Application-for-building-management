package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.apartment.Apartment;
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
    return Lists.newArrayList(apartmentRepository.findAll());
  }

  @Override
  public Apartment getById(Long id) {
    return apartmentRepository.findById(id);
  }

  @Override
  public Apartment add(Apartment apartment) {
    return this.apartmentRepository.save(apartment);
  }

  @Override
  public Apartment getByUserId(Long id) {
    Iterable<Apartment> apartments = apartmentRepository.findAll();

    for(Apartment apartment : apartments) {
      if(apartment.getOwner() != null) {
        if(apartment.getOwner().getId() == id)
          return apartment;
      }
    }
    return null;
  }
}

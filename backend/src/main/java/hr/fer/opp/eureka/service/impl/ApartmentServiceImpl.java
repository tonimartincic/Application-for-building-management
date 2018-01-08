package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.apartment.Apartment;
import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.repository.ApartmentRepository;
import hr.fer.opp.eureka.repository.BuildingRepository;
import hr.fer.opp.eureka.service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApartmentServiceImpl implements ApartmentService {

  private final ApartmentRepository apartmentRepository;
  private final BuildingRepository buildingRepository;

  @Autowired
  public ApartmentServiceImpl(ApartmentRepository apartmentRepository, BuildingRepository buildingRepository) {
    this.apartmentRepository = apartmentRepository;
    this.buildingRepository = buildingRepository;
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
  public Apartment add(Apartment apartment, Long buildingId) {

    Building building = buildingRepository.findById(buildingId);

    apartment.setBuilding(building);

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

  @Override
  public void deleteById(Long id) {
    this.apartmentRepository.delete(id);
  }
}

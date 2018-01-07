package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.apartment.Apartment;
import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.cost.CostResponse;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrder;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrderRequest;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.enumeration.UserPrivilege;
import hr.fer.opp.eureka.repository.PaymentOrderRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.PaymentOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentOrderImpl implements PaymentOrderService {

  private final PaymentOrderRepository paymentOrderRepository;

  private final UserRepository userRepository;

  @Autowired
  public PaymentOrderImpl(
    PaymentOrderRepository paymentOrderRepository,
    UserRepository userRepository) {

    this.paymentOrderRepository = paymentOrderRepository;
    this.userRepository = userRepository;
  }

  @Override
  public List<PaymentOrder> getAllForCurrentUser(Long currentUserId) {
    Building currentUserBuilding = getCurrentUserBuilding(currentUserId);

    List<PaymentOrder> allPaymentOrders = Lists.newArrayList(this.paymentOrderRepository.findAll());
    List<PaymentOrder> paymentOrdersForBuilding = new ArrayList<>();

    for(PaymentOrder paymentOrder : allPaymentOrders) {
      if((((Apartment) paymentOrder.getPayer().getApartments().toArray()[0]).getBuilding().getId() == currentUserBuilding.getId()) ||
        (((Apartment) paymentOrder.getReceiver().getApartments().toArray()[0]).getBuilding().getId() == currentUserBuilding.getId())) {
        paymentOrdersForBuilding.add(paymentOrder);
      }
    }

    return paymentOrdersForBuilding;
  }

  private Building getCurrentUserBuilding(Long currentUserId) {
    User currentUser = this.userRepository.findById(currentUserId);
    Building currentUserBuilding;

    if(currentUser.getPrivilege().equals(UserPrivilege.MANAGER)) {
      currentUserBuilding = (Building) currentUser.getManagerBuildingSet().toArray()[0];
    } else {
      currentUserBuilding = ((Apartment) currentUser.getApartments().toArray()[0]).getBuilding();
    }
    return currentUserBuilding;
  }

  @Override
  public PaymentOrder getById(Long id) {
    return paymentOrderRepository.findById(id);
  }

  @Override
  public PaymentOrder add(PaymentOrderRequest paymentOrderRequest) {
    PaymentOrder paymentOrder = new PaymentOrder(paymentOrderRequest);

    paymentOrder.setPayer(this.userRepository.findById(paymentOrderRequest.getPayerId()));
    paymentOrder.setReceiver(this.userRepository.findById(paymentOrderRequest.getReceiverId()));

    return this.paymentOrderRepository.save(paymentOrder);
  }

  @Override
  public PaymentOrder edit(PaymentOrderRequest paymentOrderRequest) {
    PaymentOrder paymentOrder = new PaymentOrder(paymentOrderRequest);

    paymentOrder.setPayer(this.userRepository.findById(paymentOrderRequest.getPayerId()));
    paymentOrder.setReceiver(this.userRepository.findById(paymentOrderRequest.getReceiverId()));

    return this.paymentOrderRepository.save(paymentOrder);
  }

  @Override
  public void deleteById(Long id) {
    this.paymentOrderRepository.delete(id);
  }
}

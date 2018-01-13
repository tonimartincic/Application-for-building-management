package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrder;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrderRequest;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrderResponse;
import hr.fer.opp.eureka.repository.PaymentOrderRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.repository.CostRepository;
import hr.fer.opp.eureka.service.BuildingService;
import hr.fer.opp.eureka.service.PaymentOrderService;
import hr.fer.opp.eureka.service.CostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentOrderImpl implements PaymentOrderService {

  private final PaymentOrderRepository paymentOrderRepository;

  private final UserRepository userRepository;

  private final BuildingService buildingService;

  private final CostRepository costRepository;

  @Autowired
  public PaymentOrderImpl(
    PaymentOrderRepository paymentOrderRepository,
    UserRepository userRepository,
    BuildingService buildingService,
    CostRepository costRepository) {

    this.paymentOrderRepository = paymentOrderRepository;
    this.userRepository = userRepository;
    this.buildingService = buildingService;
    this.costRepository = costRepository;
  }

  @Override
  public List<PaymentOrderResponse> getAllForCurrentUser(Long currentUserId) {
    Building currentUserBuilding = this.buildingService.getBuildingForUser(currentUserId);

    List<PaymentOrder> allPaymentOrders = Lists.newArrayList(this.paymentOrderRepository.findAll());
    List<PaymentOrderResponse> paymentOrdersForBuilding = new ArrayList<>();

    for(PaymentOrder paymentOrder : allPaymentOrders) {
      if(isNeededToAddPaymentOrder(currentUserBuilding, paymentOrder)) {
        paymentOrdersForBuilding.add(getPaymentOrdersResponse(paymentOrder));
      }
    }

    return paymentOrdersForBuilding;
  }

  private boolean isNeededToAddPaymentOrder(Building currentUserBuilding, PaymentOrder paymentOrder) {
    Building payerBuilding = this.buildingService.getBuildingForUser(paymentOrder.getPayer().getId());
    Building receiverBuilding = this.buildingService.getBuildingForUser(paymentOrder.getReceiver().getId());

    if(payerBuilding != null && payerBuilding.equals(currentUserBuilding)) {
      return true;
    }

    if(receiverBuilding != null && receiverBuilding.equals(currentUserBuilding)) {
      return true;
    }

    return false;
  }

  @Override
  public PaymentOrderResponse getById(Long id) {
    return getPaymentOrdersResponse(paymentOrderRepository.findById(id));
  }

  @Override
  public PaymentOrderResponse add(PaymentOrderRequest paymentOrderRequest) {
    PaymentOrder paymentOrder = new PaymentOrder(paymentOrderRequest);

    paymentOrder.setPayer(this.userRepository.findById(paymentOrderRequest.getPayerId()));
    paymentOrder.setReceiver(this.userRepository.findById(paymentOrderRequest.getReceiverId()));
    paymentOrder.setCost(this.costRepository.findById(paymentOrderRequest.getCostId()));
    return getPaymentOrdersResponse(paymentOrderRepository.save(paymentOrder));
  }

  @Override
  public PaymentOrderResponse edit(PaymentOrderRequest paymentOrderRequest) {
    PaymentOrder paymentOrder = new PaymentOrder(paymentOrderRequest);

    paymentOrder.setPayer(this.userRepository.findById(paymentOrderRequest.getPayerId()));
    paymentOrder.setReceiver(this.userRepository.findById(paymentOrderRequest.getReceiverId()));

    return getPaymentOrdersResponse(paymentOrderRepository.save(paymentOrder));
  }

  @Override
  public void deleteById(Long id) {
    this.paymentOrderRepository.delete(id);
  }

  private PaymentOrderResponse getPaymentOrdersResponse(PaymentOrder paymentOrder) {
    return new PaymentOrderResponse(paymentOrder);
  }

}

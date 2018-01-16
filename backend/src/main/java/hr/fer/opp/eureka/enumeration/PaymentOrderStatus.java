package hr.fer.opp.eureka.enumeration;

public enum PaymentOrderStatus {
  NOT_PAID("Nije plaćeno"),
  PAID("Plaćeno");


  private final String name;

  PaymentOrderStatus(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public static PaymentOrderStatus getByName(final String name) {
    switch (name) {
      case "Plaćeno":
        return PaymentOrderStatus.PAID;
      default:
        return PaymentOrderStatus.NOT_PAID;
    }
  }
}

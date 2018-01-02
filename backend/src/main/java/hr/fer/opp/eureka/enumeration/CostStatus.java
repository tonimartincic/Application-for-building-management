package hr.fer.opp.eureka.enumeration;

public enum CostStatus {

  OFFER_SELECTION("Odabir ponude"),
  PAID("Plaćeno"),
  FUNDRAISING("Prikupljanje sredstava"),
  FUNDS_COLLECTED("Sredstva skupljena");

  private final String name;

  CostStatus(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public static CostStatus getByName(final String name) {
    switch (name) {
      case "Odabir ponude":
        return CostStatus.OFFER_SELECTION;
      case "Plaćeno":
        return CostStatus.PAID;
      case "Prikupljanje sredstava":
        return CostStatus.FUNDRAISING;
      default:
        return CostStatus.FUNDS_COLLECTED;
    }
  }
}

package hr.fer.opp.eureka.enumeration;

public enum UserPrivilege {

  TENANT("Stanar"),
  TENANT_REPRESENTATIVE("Predstavnik stanara"),
  MANAGER("Upravitelj"),
  ADMINISTRATOR("Administrator");

  private final String name;

  UserPrivilege(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public static UserPrivilege getByName(final String name) {
    switch (name) {
      case "Stanar":
        return UserPrivilege.TENANT;
      case "Predstavnik stanara":
        return UserPrivilege.TENANT_REPRESENTATIVE;
      case "Upravitelj":
        return UserPrivilege.MANAGER;
      default:
        return UserPrivilege.ADMINISTRATOR;
    }
  }
}

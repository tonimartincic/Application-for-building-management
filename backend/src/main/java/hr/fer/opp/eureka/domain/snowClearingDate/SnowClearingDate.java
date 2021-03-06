package hr.fer.opp.eureka.domain.snowClearingDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.opp.eureka.domain.user.User;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "snow_clearing_date")
public class SnowClearingDate {

  @Id
  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate clearingDate;

  @ManyToOne
  @JoinColumn(name = "clearing_id")
  private User user;

  private Boolean askChange;

  public SnowClearingDate() {
  }

  public SnowClearingDate(LocalDate clearingDate, User user, Boolean askChange) {
    this.clearingDate = clearingDate;
    this.user = user;
    this.askChange = askChange;
  }

  public LocalDate getClearingDate() {
    return clearingDate;
  }

  public User getUser() {
    return user;
  }

  public Boolean getAskChange() {
    return askChange;
  }

  public void setClearingDate(LocalDate clearingDate) {
    this.clearingDate = clearingDate;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public void setAskChange(Boolean askChange) {
    this.askChange = askChange;
  }
}

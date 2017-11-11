package hr.fer.opp.eureka.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "snow_clearing_schedule")
public class SnowClearingSchedule {

  @Id
  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate clearingDate;

  @ManyToOne
  @JoinColumn(name = "clearing_id")
  private User user;

  private Boolean askChange;

  public SnowClearingSchedule() {
  }

  public SnowClearingSchedule(LocalDate clearingDate, User user, Boolean askChange) {
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

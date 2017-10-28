package hr.fer.opp.eureka.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
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

  public SnowClearingSchedule(LocalDate clearingDate, User user, Boolean askChange) {
    this.clearingDate = clearingDate;
    this.user = user;
    this.askChange = askChange;
  }
}

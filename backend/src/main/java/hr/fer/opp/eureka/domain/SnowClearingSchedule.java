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
  private LocalDate clearing_date;

  @ManyToOne
  @JoinColumn(name = "clearing_id")
  private User user;

  private Boolean ask_change;

  public SnowClearingSchedule(LocalDate clearing_date, User user, Boolean ask_change) {
    this.clearing_date = clearing_date;
    this.user = user;
    this.ask_change = ask_change;
  }
}

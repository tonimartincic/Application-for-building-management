package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.SnowClearingDate;
import hr.fer.opp.eureka.service.SnowClearingDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
public class SnowClearingDateController {

  private final SnowClearingDateService snowClearingDateService;

  @Autowired
  public SnowClearingDateController(SnowClearingDateService snowClearingDateService) {
    this.snowClearingDateService = snowClearingDateService;
  }

  @GetMapping("/api/snow-clearing-schedules")
  public List<SnowClearingDate> getAllSnowClearingSchedules() {
    return snowClearingDateService.getAll();
  }

  @PostMapping("/api/snow-clearing-schedules/create")
  public void createSchedule(@RequestParam String from, @RequestParam String to) {
    snowClearingDateService.createSchedule(LocalDate.parse(from), LocalDate.parse(to));
  }

  @PostMapping("/api/snow-clearing-schedules/ask-change")
  public SnowClearingDate askChange(@RequestParam String date) {
    return snowClearingDateService.askChange(LocalDate.parse(date));
  }
}

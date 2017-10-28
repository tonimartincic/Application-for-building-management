package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.SnowClearingSchedule;
import hr.fer.opp.eureka.service.SnowClearingScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
public class SnowClearingScheduleController {

  private final SnowClearingScheduleService snowClearingScheduleService;

  @Autowired
  public SnowClearingScheduleController(SnowClearingScheduleService snowClearingScheduleService) {
    this.snowClearingScheduleService = snowClearingScheduleService;
  }

  @GetMapping("/api/snow-clearing-schedules")
  public List<SnowClearingSchedule> getAllSnowClearingSchedules() {
    return snowClearingScheduleService.getAll();
  }

  @PostMapping("/api/snow-clearing-schedules")
  public void createSchedule(@RequestParam String from, @RequestParam String to) {
    snowClearingScheduleService.createSchedule(LocalDate.parse(from), LocalDate.parse(to));
  }
}

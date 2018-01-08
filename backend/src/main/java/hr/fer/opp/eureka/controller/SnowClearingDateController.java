package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.snowClearingDate.SnowClearingDate;
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

  @GetMapping("/api/snow-clearing-schedules/{currentUserId}")
  public List<SnowClearingDate> getAllSnowClearingSchedules(@PathVariable Long currentUserId) {
    return snowClearingDateService.getAllForCurrentBuilding(currentUserId);
  }

  @PostMapping("/api/snow-clearing-schedules/create")
  public List<SnowClearingDate> createSchedule(@RequestParam String from, @RequestParam String to, @RequestParam Long currentUserId) {
    return snowClearingDateService.createScheduleForCurrentBuilding(LocalDate.parse(from), LocalDate.parse(to), currentUserId);
  }

  @PostMapping("/api/snow-clearing-schedules/ask-change")
  public SnowClearingDate askChange(@RequestParam String date, @RequestParam Long currentUserId) {
    return snowClearingDateService.askChangeForCurrentBuilding(LocalDate.parse(date), currentUserId);
  }

  @PostMapping("/api/snow-clearing-schedules/approve-changes")
  public List<SnowClearingDate> approveChanges(@RequestParam String firstDate, @RequestParam String secondDate, @RequestParam Long currentUserId) {
    return snowClearingDateService.approveChangesForCurrentBuilding(LocalDate.parse(firstDate), LocalDate.parse(secondDate), currentUserId);
  }
}

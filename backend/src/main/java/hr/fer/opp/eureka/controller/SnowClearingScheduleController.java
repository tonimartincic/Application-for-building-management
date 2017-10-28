package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.SnowClearingSchedule;
import hr.fer.opp.eureka.service.SnowClearingScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
public class SnowClearingScheduleController {

  private SnowClearingScheduleService snowClearingScheduleService;

  @Autowired
  public SnowClearingScheduleController(SnowClearingScheduleService snowClearingScheduleService) {
    this.snowClearingScheduleService = snowClearingScheduleService;
  }

  @GetMapping("/api/snowSchedule")
  public List<SnowClearingSchedule> getAllSnowClearingScheduleList() {
    return this.snowClearingScheduleService.getAll();
  }

  @GetMapping(value = "/api/showSchedule/create", params = {"from", "to"})
  public void createSchedule(
    @RequestParam(value = "from") String from,
    @RequestParam(value = "to") String to
  ) {
    this.snowClearingScheduleService.createSchedule(LocalDate.parse(from), LocalDate.parse(to));
  }

}

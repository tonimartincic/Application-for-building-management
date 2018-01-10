package hr.fer.opp.eureka.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/").setViewName("index");
    registry.addViewController("/board").setViewName("index");
    registry.addViewController("/planning-future-costs").setViewName("index");
    registry.addViewController("/snow-clearing-schedule").setViewName("index");
    registry.addViewController("/all-users").setViewName("index");
    registry.addViewController("/payments").setViewName("index");
    registry.addViewController("/building-info").setViewName("index");
    registry.addViewController("/apartment-info").setViewName("index");
    registry.addViewController("/login").setViewName("index");
  }
}

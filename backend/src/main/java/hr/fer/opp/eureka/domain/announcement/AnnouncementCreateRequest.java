package hr.fer.opp.eureka.domain.announcement;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public class AnnouncementCreateRequest {

  private Long userId;

  private String content;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate expirationDate;

  public AnnouncementCreateRequest(){
  }

  public AnnouncementCreateRequest(Long userId, String content, LocalDate expirationDate) {
    this.userId = userId;
    this.content = content;
    this.expirationDate = expirationDate;
  }

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public LocalDate getExpirationDate() {
    return expirationDate;
  }

  public void setExpirationDate(LocalDate expirationDate) {
    this.expirationDate = expirationDate;
  }
}

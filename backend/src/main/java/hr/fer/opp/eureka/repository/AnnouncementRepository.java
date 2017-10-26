package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.Announcement;
import org.springframework.data.repository.CrudRepository;

public interface AnnouncementRepository extends CrudRepository<Announcement,Long> {

  Announcement findById(Long id);
}

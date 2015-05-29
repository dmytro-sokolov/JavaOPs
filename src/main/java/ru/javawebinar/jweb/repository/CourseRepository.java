package ru.javawebinar.jweb.repository;

import ru.javawebinar.jweb.domain.Course;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Course entity.
 */
public interface CourseRepository extends JpaRepository<Course,Long> {

}

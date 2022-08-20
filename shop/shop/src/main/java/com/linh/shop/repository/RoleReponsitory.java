package com.linh.shop.repository;
import java.util.Optional;
import com.linh.shop.model.ERole;
import com.linh.shop.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleReponsitory extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}

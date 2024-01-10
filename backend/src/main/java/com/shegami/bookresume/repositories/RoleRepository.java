package com.shegami.bookresume.repositories;

import com.shegami.bookresume.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {

    Role findByName(String name);
}

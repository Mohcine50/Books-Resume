package com.shegami.bookresume.repositories;

import com.shegami.bookresume.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, String> {

    AppUser findByUsername(String username);

}

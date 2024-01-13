package com.shegami.bookresume.repositories;

import com.shegami.bookresume.entities.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, String> {
}

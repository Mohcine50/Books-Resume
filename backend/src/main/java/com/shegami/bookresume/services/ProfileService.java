package com.shegami.bookresume.services;

import com.shegami.bookresume.entities.Profile;
import com.shegami.bookresume.models.ProfileDto;

public interface ProfileService {

    Profile createProfile(ProfileDto profileDto);

}

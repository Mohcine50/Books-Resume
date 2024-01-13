package com.shegami.bookresume.services;

import com.shegami.bookresume.entities.Profile;
import com.shegami.bookresume.models.ProfileDto;
import com.shegami.bookresume.repositories.ProfileRepository;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl implements ProfileService {
    private final ProfileRepository profileRepository;

    public ProfileServiceImpl(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Override
    public Profile createProfile(ProfileDto profileDto) {

        Profile profile = Profile.builder()
                .id(null)
                .image(profileDto.getImage())
                .email(profileDto.getEmail())
                .build();

        return profileRepository.save(profile);
    }
}

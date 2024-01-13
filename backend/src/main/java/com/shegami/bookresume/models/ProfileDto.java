package com.shegami.bookresume.models;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class ProfileDto {
    String email ;
    String image = null;
}

package com.shegami.bookresume;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import com.shegami.bookresume.config.RsaKeysConfig;
import com.shegami.bookresume.entities.AppUser;
import com.shegami.bookresume.entities.Role;
import com.shegami.bookresume.services.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;

@SpringBootApplication
@AllArgsConstructor
@EnableConfigurationProperties(RsaKeysConfig.class)
public class BookResumeApplication {

    private RsaKeysConfig rsaKeysConfig;

    public static void main(String[] args) {
        SpringApplication.run(BookResumeApplication.class, args);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public JwtEncoder JwtEncoder() {

        JWK jwk = new RSAKey.Builder(rsaKeysConfig.publicKey()).privateKey(rsaKeysConfig.privateKey()).build();
        JWKSource<SecurityContext> jwkSource = new ImmutableJWKSet<>(new JWKSet(jwk));

        return new NimbusJwtEncoder(jwkSource);

    }

    @Bean
    public JwtDecoder JwtDecoder() {

        return NimbusJwtDecoder.withPublicKey(rsaKeysConfig.publicKey()).build();
    }

    /**
    CommandLineRunner commandLineRunner(AccountService accountService) {

        return args -> {

            accountService.addNewRole(new Role(null, "ADMIN"));
            accountService.addNewRole(new Role(null, "USER"));

            accountService.addNewUser(new AppUser(null, "admin", "admin@gmail.com", "123456789", null, null));
            accountService.addNewUser(new AppUser(null, "user", "user@gmail.com", "123456789", null, null));


            accountService.addRoleToUser("admin", "ADMIN");

        };
    } */
}

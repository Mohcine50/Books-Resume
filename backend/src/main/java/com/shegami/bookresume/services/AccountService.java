package com.shegami.bookresume.services;

import com.shegami.bookresume.entities.AppUser;
import com.shegami.bookresume.entities.Role;

import java.util.List;

public interface AccountService {
    AppUser addNewUser(AppUser appUser);

    AppUser getUserById(String id);

    AppUser getUserByUsername(String username);

    Role addNewRole(Role role);

    void addRoleToUser(String username, String roleName);

    void deleteRoleFromUser(String username, String roleName);

    AppUser loadUserByUsername(String username);

    List<AppUser> listUser();

    void deleteRole(String id);

    void deleteUser(String id);
}

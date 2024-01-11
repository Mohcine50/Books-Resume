package com.shegami.bookresume.Utils;

import com.nimbusds.jose.shaded.gson.JsonObject;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;

import java.io.IOException;

public class RequestManagement {

    public static String resolveToken(HttpServletRequest request) {

        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("accessToken".equals(cookie.getName())) {
                    String jwtToken = cookie.getValue();
                    return jwtToken;
                }
            }
        }
        return null;
    }


    public static void writeResponse(HttpServletResponse response, int status, JsonObject jsonObject) throws IOException {
        response.setStatus(status);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().write(jsonObject.toString());
        response.getWriter().flush();
    }
}

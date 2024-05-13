package com.example.mobile.config;

import com.example.mobile.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity

public class SecurityConfig {
    @Autowired //의존성 주입
    MemberService memberService;
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.formLogin(form -> form
                        .loginPage("/members/login") //로그인 페이지 url설정
                        .defaultSuccessUrl("/")// 로그인 성공 시 이동할 url
                        .usernameParameter("email") //고르인 시 사용할 파라미터 이름으로 email을 지정
                        .failureUrl("/members/login/error") //로그인 실패 시 이동할 url
                )
                .logout(logout -> logout
                        .logoutRequestMatcher(new AntPathRequestMatcher("/members/logout"))
                        .logoutSuccessUrl("/") //로그아웃 성공 시 이동할 url
                )
                //주소창에 페이지 주소를 넣는 것을 사용한다는 의미
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/css/**","/js/**","/img/**").permitAll() //permitall 모든 사용자 접근가능
                        .requestMatchers("/","/members/**","/item/**","/images/**").permitAll()
                        .requestMatchers("/admin/**").hasRole("ADMIN") //어드민만 접근 가능
                        .anyRequest().authenticated() //나머지 모든 경로들은 인증하도록
                )
                .exceptionHandling(exception -> exception //사용자가 리소스에 접근했을 때 수행되는 핸들러 등록
                        .authenticationEntryPoint(new CustomAuthenticationEntryPoint())
                );

        return http.build();//권한 설정?
    } //컨트롤러에서 세팅하지 않고 여기서 스프링에서 지원하는 기능들로 구현한 것


    @Bean
    public PasswordEncoder passwordEncoder(){

        return new BCryptPasswordEncoder(); //비밀번호 맞나 확인하는?
    }
}
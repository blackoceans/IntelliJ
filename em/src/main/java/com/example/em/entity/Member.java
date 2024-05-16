package com.example.em.entity;

import com.example.em.constant.Role;
import com.example.em.dto.MemberFormDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.crypto.password.PasswordEncoder;

@Entity
@Table(name="member") //테이블 이름 설정, 안 적으면 자동으로 만들어줌
@Getter
@Setter
@ToString
public class Member {

    @Id
    @Column(name="member_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @Column(unique = true) //이메일이 같은 경우는 없으니까 유니크로
    private String email;
    private String password;
    private String address;
    @Enumerated(EnumType.STRING) //상수 변수
    private Role role;
    public static Member createMember(MemberFormDto memberFormDto, PasswordEncoder passwordEncoder){
        Member member = new Member(); //리턴에쓸 멤버객체 생성
        member.setName(memberFormDto.getName());
        member.setEmail(memberFormDto.getEmail());
        member.setAddress(memberFormDto.getAddress());
        String password = passwordEncoder.encode(memberFormDto.getPassword());
        member.setPassword(password);
        member.setRole(Role.ADMIN);
        //member.setRole(Role.USER);

        return member;
    }
}
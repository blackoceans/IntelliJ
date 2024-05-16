package com.example.em.repository;

import com.example.em.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByEmail(String email); //중복 이메일 검사, find~이건 스프링에서 자체지원하는 기능
}
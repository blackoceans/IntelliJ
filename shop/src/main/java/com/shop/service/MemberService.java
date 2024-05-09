package com.shop.service;

import com.shop.entity.Member;
import com.shop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional //에러가 발생했을 때 가입되지 않고 되돌아가도록 함
@RequiredArgsConstructor //Bean객체의 생성자
public class MemberService {
    private final MemberRepository memberRepository;

    public Member saveMember(Member member){
        validateDuplicateMember(member);
        return memberRepository.save(member); //아래 중복 검사 거치고 중복 아니면 저장 수행
    }

    private void validateDuplicateMember(Member member){ //중복검사 메소드
        Member findMember = memberRepository.findByEmail(member.getEmail());
        if(findMember != null){
            throw new IllegalStateException("이미 가입된 회원입니다");
        }
    }
}

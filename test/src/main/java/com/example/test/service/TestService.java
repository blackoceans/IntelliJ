package com.example.test.service;

import com.example.test.entity.Test;


import java.util.Optional;

public interface TestService {
    Iterable<Test> selectAll();  /*퀴즈 모든 정보 가져오기*/
    Optional<Test> selectOneById(Integer id); /*퀴즈 지정 정보 가져오기*/
    Optional<Test> selectOneRandomTest(); /*퀴즈 랜덤 가져오기*/
    Boolean checkTest(Integer id, Boolean myAnswer); /*퀴즈 정답/오답 여부 판단*/
    void insertTest(Test test); /*퀴즈 등록*/
    void updateTest(Test test); /*퀴즈 변경*/
    void deleteTestById(Integer id); /*퀴즈 삭제*/
}

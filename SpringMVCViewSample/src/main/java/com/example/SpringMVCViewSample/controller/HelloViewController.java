package com.example.SpringMVCViewSample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("hello") //주소창에 hello가 들어오면 실행
//@RequestMapping(value = {"hello", "hellospring"})
//@RequestMapping(value = "hello", method = RequestMethod.GET)
//@RequestMapping(value = "hello", method = {RequestMethod.GET, RequestMethod.POST})
public class HelloViewController {
    @GetMapping("view") //view가 들어오면 실행
    //@GetMapping(value = {"hello", "hellospring" }) hello, hellospring이 들어오면 실행; 여러개 넣을 수 있다
    public String helloView(){
        return "hello"; //hello.html를 실행하란 뜻
    }
}

//문제 http://localhost:8080/hello/view2를 입력하면 morning이 출력되게
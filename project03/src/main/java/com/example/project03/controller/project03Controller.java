package com.example.project03.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class project03Controller {
    @GetMapping("index")
    public String showindex(){

        return "index";
    }

    @GetMapping("login")
    public String showlogin(){

        return "login";
    }
    @GetMapping("board")
    public String showboard(){

        return "board";
    }
    @GetMapping("qnaboard")
    public String showqnaboard(){

        return "qnaboard";
    }

}

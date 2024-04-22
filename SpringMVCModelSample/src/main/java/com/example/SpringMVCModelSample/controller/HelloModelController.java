package com.example.SpringMVCModelSample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("hello")

public class HelloModelController {
    //@GetMapping("model")
    @GetMapping("bbbbb")
    public String helloView(Model model) {
        model.addAttribute("msg","타임리프");
        model.addAttribute("name","길동");
        return "helloThymeleaf";
        //return "useThymeleaf";
    }

    //http://localhost:8080/hello/bbbbb 치면 나온다
}


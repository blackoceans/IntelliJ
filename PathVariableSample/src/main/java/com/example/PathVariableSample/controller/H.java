package com.example.PathVariableSample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class H {
    @PostMapping(value = "home", params = "h")
    public String showHomeView(){
        return "show";
    }
}

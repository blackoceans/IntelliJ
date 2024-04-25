package com.example.ValidationSample.controller;

import com.example.ValidationSample.form.CalcForm;
import com.example.ValidationSample.validator.CalcValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ValidationController {

    /*form-backing bean이라고함*/
    @ModelAttribute
    public CalcForm setUpForm(){
        return new CalcForm();
    }
    @GetMapping("show")
    public String showView(){
        return "entry";
    }

    @PostMapping("calc")
    public String confirmView(
            @Validated CalcForm form, BindingResult bindingResult, Model model
    ){
        if(bindingResult.hasErrors()){ //hasErrors: 에러가있다면
            return "entry"; //되돌아감으로써 초기화효과
        }
        Integer result = form.getLeftNum() + form.getRightNum();
        model.addAttribute("result", result);

        return "confirm";
    }

    /*직접만든 검사기 등록하는 부분*/
    @Autowired
    CalcValidator calcValidator;
    @InitBinder("calcForm")
    public void initBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(calcValidator);
    }
}

package com.example.test.controller;

import com.example.test.entity.Test;
import com.example.test.form.TestForm;
import com.example.test.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.swing.text.html.Option;
import java.time.LocalDate;
import java.util.Optional;

@Controller
@RequestMapping("/test")
public class TestController {
    @Autowired
    TestService service;

    @ModelAttribute
    public TestForm setUpForm() {
        TestForm form = new TestForm();
        form.setAnswer(true);
        return form;
    }

    @GetMapping
    public String showList(TestForm testForm, Model model) {
        testForm.setNewTest(true);
        Iterable<Test> list = service.selectAll();

        model.addAttribute("list", list);
        model.addAttribute("title", "민원 신청하기");

        return "qnaboard";
    }

    @PostMapping("/insert")
    public String insert(@Validated TestForm testForm, BindingResult bindingResult, Model model, RedirectAttributes redirectAttributes){
        Test test = new Test();
        test.setQuestion(testForm.getQuestion());
        test.setCon(testForm.getCon());
        test.setAnswer(testForm.getAnswer());
        test.setAuthor(testForm.getAuthor());
        LocalDate localDate = LocalDate.now();
        test.setDate(localDate);

        if(!bindingResult.hasErrors()){
            service.insertTest(test);
            redirectAttributes.addFlashAttribute("complete", "등록이 완료되었습니다");
            return "redirect:/test";
        } else{
            return showList(testForm, model);
        }
    }

    @GetMapping("/{id}")
    public String showUpdate(TestForm testForm, @PathVariable Integer id, Model model){
        Optional<Test> testOpt = service.selectOneById(id);
        Optional<TestForm> testFormOpt = testOpt.map(t -> makeTestForm(t));
        if(testFormOpt.isPresent()) {
            testForm = testFormOpt.get();
        }
        makeUpdateModel(testForm, model);
        return "qnaboardWrite";
    }
    private void makeUpdateModel(TestForm testForm, Model model){
        model.addAttribute("id", testForm.getId());
        testForm.setNewTest(false);
        model.addAttribute("testForm", testForm);
        model.addAttribute("title", "변경 폼");
    }

    @PostMapping("/update")
    public String update(@Validated TestForm testForm,
                         BindingResult result,
                         Model model,
                         RedirectAttributes redirectAttributes){
        Test test = makeTest(testForm);
        if(!result.hasErrors()){
            service.updateTest(test);
            redirectAttributes.addFlashAttribute("complete", "변경이 완료되었습니다");
            return "redirect:/test"; /*+ test.getId()*/
        } else{
            makeUpdateModel(testForm, model);
            return "qnaboardWrite";
        }
    }

    private Test makeTest(TestForm testForm){
        Test test = new Test();
        test.setId(testForm.getId());
        test.setQuestion(testForm.getQuestion());
        test.setCon(testForm.getCon());
        test.setAnswer(testForm.getAnswer());
        test.setAuthor(testForm.getAuthor());
        return test;
    }

    private TestForm makeTestForm(Test test){
        TestForm form = new TestForm();
        form.setId(test.getId());
        form.setQuestion(test.getQuestion());
        form.setCon(test.getCon());
        form.setAnswer(test.getAnswer());
        form.setAuthor(test.getAuthor());
        form.setNewTest(false);
        return form;
    }

    @PostMapping("/delete")
    public String delete(@RequestParam("id") String id,
                         Model model,
                         RedirectAttributes redirectAttributes){
        service.deleteTestById(Integer.parseInt(id));
        redirectAttributes.addFlashAttribute("delcomplete","삭제 완료했습니다");
        return "redirect:/test";
    }

    @GetMapping("/index")
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

    @GetMapping("qnaboardWrite")
    public String showqnaboardWrite(){

        return "qnaboardWrite";
    }
}

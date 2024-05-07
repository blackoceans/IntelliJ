package com.example.test.form;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TestForm {
    private Integer id;
    @NotBlank
    private String question;
    @NotBlank
    private String con;
    private Boolean answer;
    @NotBlank
    private String author;
    private Boolean newTest;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate date;
}

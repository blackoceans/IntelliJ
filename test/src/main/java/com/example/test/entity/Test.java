package com.example.test.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Test {
    @Id
    private Integer id;
    private String question;
    private String con;
    private Boolean answer;
    private String author;
    private LocalDate date;

}

package com.example.ThymeleafSample.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Member {
    //getter,setter 넣은 효과
    private Integer id;
    private String name;
}

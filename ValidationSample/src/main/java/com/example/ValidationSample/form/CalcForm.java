package com.example.ValidationSample.form;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

@Data
/* 클래스이름이 모델이됨 Model = calcForm */
public class CalcForm {
    @NotNull
    @Range(min=1, max=10)
    private Integer leftNum;

    @NotNull
    @Range(min=1, max=10)
    private Integer rightNum;
}

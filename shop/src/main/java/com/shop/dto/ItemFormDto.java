package com.shop.dto;

import com.shop.constant.ItemSellStatus;
import com.shop.entity.Item;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ItemFormDto {
    private Long id;

    @NotBlank(message = "상품명은 필수 입력 값입니다")
    private String itemNm;

    @NotBlank(message = "가격은 필수 입력 값입니다")
    private Integer price;

    @NotBlank(message = "상품 상세은 필수 입력 값입니다")
    private String itemDetail;

    @NotBlank(message = "재고은 필수 입력 값입니다")
    private Integer stockNumber;

    private ItemSellStatus itemSellStatus;

    private List<ItemImgDto> itemImgDtoList = new ArrayList<>(); //상품 저장후 수정할 때 상품 이미지 정보를 저장하는 리스트

    private List<Long> itemImgIds = new ArrayList<>(); // 상품의 이미지 아이디를 저장하는 리스트

    private static ModelMapper modelMapper = new ModelMapper();

    public Item createItem(){ //모델메퍼를 이용하여 엔티티 객체와 dto객체간의 데이터를 복사하여 객체에 반환해주는
        return modelMapper.map(this, Item.class);
    }

    public static ItemFormDto of(Item item){ //모델메퍼를 이용하여 엔티티 객체와 dto객체간의 데이터를 복사하여 객체에 반환해주는
        return modelMapper.map(item,ItemFormDto.class);
    }
}

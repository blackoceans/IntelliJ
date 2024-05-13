package com.shop.repository;

import com.shop.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> { //findby~등등 쑬수있게됨 extends
    Cart findByMemberId(Long memberId);
}

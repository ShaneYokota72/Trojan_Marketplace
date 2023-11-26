package com.trojan_marketplace.trojan_marketplace.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.trojan_marketplace.trojan_marketplace.model.Cart;

public interface CartRepo extends JpaRepository<Cart,Integer> {
    List<Cart> findByUserId(Integer userId);

    List<Cart> findByListingId(Integer listingId);
}

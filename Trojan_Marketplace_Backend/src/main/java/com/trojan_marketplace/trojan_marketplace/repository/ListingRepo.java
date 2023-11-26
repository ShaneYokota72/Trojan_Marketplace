package com.trojan_marketplace.trojan_marketplace.repository;

import com.trojan_marketplace.trojan_marketplace.model.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListingRepo extends JpaRepository<Listing,Integer>{
    
}

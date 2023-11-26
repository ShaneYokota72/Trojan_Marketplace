package com.trojan_marketplace.trojan_marketplace.repository;

import java.util.List;
import com.trojan_marketplace.trojan_marketplace.model.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListingRepo extends JpaRepository<Listing,Integer>{
    // @Query("SELECT * FROM listing WHERE p.name LIKE %?1%")
    // public List<Listing> search(String keyword);

    public List<Listing> findByNameContaining(String keyword);
}

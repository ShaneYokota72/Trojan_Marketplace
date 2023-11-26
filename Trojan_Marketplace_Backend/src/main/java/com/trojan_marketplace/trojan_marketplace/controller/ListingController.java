package com.trojan_marketplace.trojan_marketplace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.trojan_marketplace.trojan_marketplace.model.Listing;
import com.trojan_marketplace.trojan_marketplace.repository.ListingRepo;

@RestController
@RequestMapping(value = "/listing")
public class ListingController {

    @Autowired
    ListingRepo Listing_Repo;

    // GET: /listing/getall
    // obtain all available listings
    @GetMapping("/getall")
    List<Listing> getAllListings(){
        List<Listing> listings = Listing_Repo.findAll();
        return listings;
    }

    // POST: /listing/add
    // add a listing
    @PostMapping("/add")
    ResponseEntity<?> addListing(@RequestBody Listing listing){
        // check to make sure there is a valid user id tied to the body
        if(listing.getUserId() != null){
            // save the listing to the repository
            Listing_Repo.save(listing);

            // let the user know that their listing was succesfully saved
            return ResponseEntity.status(HttpStatus.CREATED).body(listing);
        } else {
            // no user existings
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    // DELETE: /listing/remove/{USER ID HERE}
    // remove a listing
    @DeleteMapping("/remove/{id}")
    ResponseEntity<?> removeListing(@PathVariable Integer id){
        // CONSIDERATION: 
            // instead of deleting the item from our local repository, we leave it in the 
            // repository and simply set the status to "inactive" | might be useful?


        // find the listing
        Listing listing = Listing_Repo.getReferenceById(id);

        if (listing == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        
        
        return ResponseEntity.status(HttpStatus.OK).body(listing);
    }

}

package com.trojan_marketplace.trojan_marketplace.controller;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin(origins = "http://localhost:3000")
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

    // GET: /listing/search
    // search for listings of a particular keyword
        // TODO: consider functionality to have a type of sorting (i.e. relevance, best search etc.)
    @GetMapping("/getall/{query}")
    List<Listing> searchListings(@PathVariable String query){
        // List<Listing> relevant  = Listing_Repo.findAll();

        return Listing_Repo.findByNameContaining(query);

        // Listing_Repo.findbb
        

        // TODO: implement a find all by a particular search query

        // return relevant;
    }
    
    
    // GET: /listing/get/{user-id}
    // search for listings of a a certain user
    @GetMapping("/get/{query}")
    List<Listing> mylisting(@PathVariable String query){
        // List<Listing> relevant  = Listing_Repo.findAll();
        return Listing_Repo.findByuserId(Integer.parseInt(query));
    }
    
    // GET: /listing/get/{user-id}
    // search for listings of a a certain user
    @GetMapping("/getitem/{num}")
    ResponseEntity<?> getone(@PathVariable String num){
        Optional<Listing> optionalItem = Listing_Repo.findById(Integer.parseInt(num));
        if(!optionalItem.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Listing item = optionalItem.get();
        // return item;
        return ResponseEntity.status(HttpStatus.OK).body(item);
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

    // POST: /listing/remove/{USER ID HERE}
    // remove a listing
    @PostMapping("/remove/{id}")
    @NotFound(action = NotFoundAction.IGNORE)
    ResponseEntity<?> removeListing(@PathVariable Integer id){
        // CONSIDERATION: 
            // instead of deleting the item from our local repository, we leave it in the 
            // repository and simply set the status to "inactive" | might be useful?

        try {
            Listing listing = Listing_Repo.findById(id).get();

            Listing_Repo.delete(listing);

            return ResponseEntity.status(HttpStatus.OK).body("success");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ITEM NOT FOUND");
        }
    }


    // POST: /listing/edit/{LISTING ID HERE}
    // remove a listing
        // TODO: consider adding functionality to make sure the right user edits their OWN listing
    @PostMapping("/edit/{id}")
    // @NotFound(action = NotFoundAction.IGNORE)
    ResponseEntity<?> editListing(@PathVariable Integer id, @RequestBody Listing edits){
        try {
            // obtain our specific listing
            Listing listing = Listing_Repo.findById(id).get();

            // update all our entries
                // TODO: make sure entries aren't null (they shouldn't be?)
            listing.setName(edits.getName());
            listing.setPrice(edits.getPrice());
            listing.setDescription(edits.getDescription());
            listing.setStatus(edits.getStatus());
            listing.setImage(edits.getImage());

            // save the existing item BACK to the repository
            Listing_Repo.save(listing);

            // return the modified listing in the database
            return ResponseEntity.status(HttpStatus.OK).body(listing);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ITEM NOT FOUND");
        }
    }

}

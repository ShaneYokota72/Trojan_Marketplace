package com.trojan_marketplace.trojan_marketplace.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trojan_marketplace.trojan_marketplace.model.Cart;
import com.trojan_marketplace.trojan_marketplace.model.Listing;
import com.trojan_marketplace.trojan_marketplace.repository.CartRepo;
import com.trojan_marketplace.trojan_marketplace.repository.ListingRepo;

@RestController
@RequestMapping(value = "/cart")
public class CartController {
    
    @Autowired
    CartRepo Cart_Repo;

    @Autowired
    ListingRepo Listing_Repo;

    // GET: /cart/get/{USER ID GOES HERE}
    // obtain all cart items associated with a user (i.e. a user's cart)
    @GetMapping("/get/{id}")
    List<Listing> getAllCartItems(@PathVariable Integer id){
        // obtain all cart items
        List<Cart> cartItems = Cart_Repo.findByUserId(id);

        // turn each id into a formatted cart
        List<Listing> formattedCartItems = new ArrayList<Listing>();

        for (Cart item: cartItems) {
            // try for each iteration (until a null entry is found)
            try {
                // create the formatted list
                Integer listing_id = item.getListingId();
                Listing listing = Listing_Repo.findById(listing_id).get();

                formattedCartItems.add(listing);

            } catch (Exception e) {
                // error! 

                System.out.println("Listing not found! [UNHANDLED]");
            }
        }

        return formattedCartItems;
    }

    // POST: /cart/add
    // add a listing
    @PostMapping("/add")
    ResponseEntity<?> addCartItem(@RequestBody Cart cartItem){
        // check to make sure there is a valid user id tied to the body
        if(cartItem.getUserId() != null){
            // save the listing to the repository
            Cart_Repo.save(cartItem);

            // let the user know that their listing was succesfully saved
            return ResponseEntity.status(HttpStatus.CREATED).body(cartItem);
        } else {
            // no user existings
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    // POST: /cart/remove/{cart ID HERE}
    // remove an item from the cart.
        // NOTE: you need the associated ID with the LISTING ITEM for this functionality
    @PostMapping("/remove/{id}")
    ResponseEntity<?> removeCartItem(@PathVariable Integer id){
        try {
            Optional<Cart> optionalItem = Cart_Repo.findById(id);
            if(!optionalItem.isPresent()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ITEM NOT FOUND");
            }

            // remove the item in the relevant items list
            Cart item = optionalItem.get();
            Cart_Repo.delete(item);

            return ResponseEntity.status(HttpStatus.OK).body("success");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ITEM NOT FOUND");
        }    
    }

}

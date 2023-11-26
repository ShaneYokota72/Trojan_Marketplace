package com.trojan_marketplace.trojan_marketplace.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Listing {
 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id; // item id (not to be confused with user id)

    // create a 'one to many' ratio
    // @OneToMany
    // @JoinColumn(name = "user_id")
    Integer userId; // user who listed the item

    String name;
    String description;
    String image; // image url
    Double price;

    // this defaults to "active", and can easily be set to "inactive" when the order is removed
    String status="active";

    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public Integer getUserId(){
        return userId;
    }

    public void setUseId(Integer userId){
        this.userId = userId;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public String getImage(){
        return image;
    }

    public void setImage(String image){
        this.image = image;
    }

    public String getStatus(){
        return status;
    }

    public void setStatus(String status){
        this.status = status;
    }

    public Double getPrice(){
        return price;
    }

    public void setPrice(Double price){
        this.price = price;
    }
}

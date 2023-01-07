package com.ytu.it.smc.JavaWeb_02.Bean;

public class Cart {
  public static final int PAGE_SIZE = 5;
  private long id;
  private String image;
  private String name;
  private double price;
  private String user;


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }


  public String getUser() {
    return user;
  }

  public void setUser(String user) {
    this.user = user;
  }

}

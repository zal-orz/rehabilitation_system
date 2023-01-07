package com.ytu.it.smc.JavaWeb_02.Bean;


public class Watches {
  public static final int PAGE_SIZE = 9;
  private String name;
  private double price;
  private String picOrig;
  private String picAfter;
  private String brand;
  private long id;
  private String availability;
  private long stockNum;
  private String description;


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


  public String getPicOrig() {
    return picOrig;
  }

  public void setPicOrig(String picOrig) {
    this.picOrig = picOrig;
  }


  public String getPicAfter() {
    return picAfter;
  }

  public void setPicAfter(String picAfter) {
    this.picAfter = picAfter;
  }


  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public String getAvailability() {
    return availability;
  }

  public void setAvailability(String availability) {
    this.availability = availability;
  }


  public long getStockNum() {
    return stockNum;
  }

  public void setStockNum(long stockNum) {
    this.stockNum = stockNum;
  }


  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

}

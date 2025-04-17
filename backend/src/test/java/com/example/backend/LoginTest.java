package com.example.backend;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import static org.junit.jupiter.api.Assertions.*;

public class LoginTest {


    private WebDriver driver = new FirefoxDriver();



    @BeforeEach
    public void setUp(){
        System.setProperty("webdriver.gecko.driver","/data/geckodriver.exe");
    }

    @Test
    public void testLoginForm(){

        driver.get("http://localhost:80/Connexion");

        WebElement usernameInput = driver.findElement(By.name("username"));
        WebElement pwdInput = driver.findElement(By.name("password"));
        WebElement loginBtn = driver.findElement(By.id("loginButton"));



        usernameInput.sendKeys("2260491");
        pwdInput.sendKeys("123");
        loginBtn.click();

        String test = "http://localhost/DashboardClient";
        assertEquals(test,driver.getCurrentUrl());
    }
}
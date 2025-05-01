package com.example.backend;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import static org.junit.jupiter.api.Assertions.*;

public class LoginTest {
    /*
     * Chadi El-Chami
     * Luderson Dominique
     * */

    private WebDriver driver = new FirefoxDriver();



    @BeforeEach
    public void setUp(){
        System.setProperty("webdriver.gecko.driver","/data/geckodriver.exe");
    }
    /*
     * Luderson Dominique
     * */
    @Test
    public void testLoginForm(){

        driver.get("http://localhost:80/Connexion");

        WebElement usernameInput = driver.findElement(By.name("username"));
        WebElement pwdInput = driver.findElement(By.name("password"));
        WebElement loginBtn = driver.findElement(By.id("loginButton"));



        usernameInput.sendKeys("Chadi");
        pwdInput.sendKeys("123");
        loginBtn.click();

        String test = "http://localhost/DashboardClient";
        assertEquals(test,driver.getCurrentUrl());
    }
    /*
     * Chadi El-Chami
     * */
    @Test
    public void testInscriptionForm(){

        driver.get("http://localhost:80/Client");
        WebElement usernameInput = driver.findElement(By.name("username"));
        WebElement pwdInput = driver.findElement(By.name("password"));
        WebElement stepOneBtn = driver.findElement(By.id("stepOne"));

        usernameInput.sendKeys("Chadchoud");
        pwdInput.sendKeys("1234");
        stepOneBtn.click();

        WebElement ageInput = driver.findElement(By.name("age"));
        WebElement weightInput = driver.findElement(By.name("weight"));
        WebElement heightInput = driver.findElement(By.name("height"));
        WebElement stepTwoButton = driver.findElement(By.id("stepTwo"));

        ageInput.sendKeys("23");
        weightInput.sendKeys("123");
        heightInput.sendKeys("197");
        stepTwoButton.click();

        WebElement lnameInput = driver.findElement(By.name("lname"));
        WebElement fnameInput = driver.findElement(By.name("fname"));
        WebElement emailInput = driver.findElement(By.name("email"));
        WebElement addressInput = driver.findElement(By.name("address"));
        WebElement phoneNumberInput = driver.findElement(By.name("phoneNumber"));
        WebElement postalCodeInput = driver.findElement(By.name("postalCode"));
        WebElement submitClient = driver.findElement(By.id("submitClient"));

        lnameInput.sendKeys("elchami");
        fnameInput.sendKeys("chadi");
        emailInput.sendKeys("chadi@lol.com");
        addressInput.sendKeys("1234 gweeghw");
        phoneNumberInput.sendKeys("5149963786");
        postalCodeInput.sendKeys("h1p 2l5");
        submitClient.click();


        String test1 = "http://localhost/DashboardClient";
        assertEquals(test1,driver.getCurrentUrl());

    }
}
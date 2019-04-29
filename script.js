// ==UserScript==
// @name         protonmail autologin
// @version      1.0
// @description  autofill loggin and password fields and click the "log in" button
// @author       f-person
// @match        https://mail.protonmail.com/*
// @grant        none
// ==/UserScript==

function login(){
    try{
        document.getElementById("username").value = "username";
        document.getElementById("password").value = "password";
        document.getElementById("login_btn").click();
    } catch(err){
        setTimeout(function(){
            login();
        }, 1000);
    }
}


(function() {
    'use strict';

    login();
})();

function toogle_forms (action) {
    if (action == "Sign In"){
        document.getElementById("sign-in-form").style.display = "block";
        document.getElementById("sign-up-form").style.display = "none"
        document.getElementById("sign-in").style.backgroundColor = "rgba(0, 0, 0, 0.09)";
        document.getElementById("sign-up").style.backgroundColor = "white";
    }
    else{
        document.getElementById("sign-up-form").style = null;
        document.getElementById("sign-in-form").style.display = "none";
        document.getElementById("sign-in").style = null;
        document.getElementById("sign-up").style = null;
    }
}
function myNav(){
    let myNav = document.getElementById("mynav");
    if(myNav.className === "nav-section"){
        myNav.className += " responsive";
    }
    else{
        myNav.className = "nav-section";
    }
}
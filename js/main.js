//js

//navigation active

var nav_link = document.getElementsByClassName("nav-link");

for(i = 0; i < nav_link.length; i++){
    if(window.location.href.includes(nav_link.href)){
        nav_link[i].classList.add("active-link");
    }
}


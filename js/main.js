//js

//navigation active

var nav_link = document.getElementsByClassName("nav-link");

for(i = 0; i < nav_link.length; i++){
    if(nav_link[i].href==window.location.href){
        nav_link[i].classList.add("active-link");
    }
    if(i>0){
        nav_link[0].classList.remove("active_link");
    }
}
var counterId = 1;
function counter(){
    counter++;
}

window.addEventListener("load",counter);
document.getElementById("visitor").innerHTML = counterId;

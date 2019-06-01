//js

//navigation active

var nav_link = document.getElementsByClassName("nav-link");

for(i = 0; i < nav_link.length; i++){
    if(nav_link[i].href==window.location.href){
        nav_link[i].classList.add("active-link");
        
        if(i!=0){
            nav_link[0].classList.remove("active_link");
        }
    }
    
}
var n = 10002;

window.onload = function(){
    n++;
    localStorage.setItem("on_load_counter",n++);
};
document.getElementById("visitor").innerHTML = "Total Visitor : "+localStorage.getItem("on_load_counter");

//js

//navigation active

var nav_link = document.getElementsByClassName("nav-link");

for(i = 0; i < nav_link.length; i++){
    if(nav_link[i].href===window.location.href){
        nav_link[i].classList.add("active-link");
    }
}

var postDataR = new XMLHttpRequest();
var postTitle = document.getElementsByClassName("post-title");
var postData = document.getElementsByClassName("post-data");

postDataR.open("GET","https://imlinuxdude.github.io/Coding/JSON/post.json");
postDataR.onload = function(){
    var post_data = JSON.parse(postDataR.responseText);
    console.log(post_data);
    for(i = 0; i < postData.length; i++){
        postTitle[i].innerHTML = post_data[i].topic;
        postData[i].innerHTML = post_data[i].content[0].para2;
    }
};
postDataR.send();
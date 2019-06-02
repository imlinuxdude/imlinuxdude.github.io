//js

//navigation active

var nav_link = document.getElementsByClassName("nav-link");

for(i = 0; i < nav_link.length; i++){
    if(nav_link[i].href===window.location.href){
        nav_link[i].classList.add("active-link");
    }
}


var postDataR = new XMLHttpRequest();

postDataR.open("GET","https://imlinuxdude.github.io/Coding/JSON/post.json");
postDataR.onload = function(){
    var post_data = JSON.parse(postDataR.responseText);

    for(j=0;j<post_data.length; j++){
        var row = document.createElement("div");
        row.classList.add("row");
        row.id = "row-data";
        document.getElementsByClassName("content")[0].appendChild(row);
        
        var col = document.createElement("div");
        var a = document.createElement("a");
        var image = document.createElement("img");
        var h4 = document.createElement("h4");
        var p = document.createElement("p");
        col.classList.add("col");
        a.href = "#";
        image.classList.add("image");
        h4.classList.add("post-title");
        p.classList.add("post-data");
        document.getElementById("row-data").appendChild(col);
        col.appendChild(a);
        a.appendChild(image);
        a.appendChild(h4);
        a.appendChild(p);
    }
    uploadData();
};
postDataR.send();

function uploadData(){
    postDataR.open("GET","https://imlinuxdude.github.io/Coding/JSON/post.json");
    postDataR.onload = function(){
    var post_data = JSON.parse(postDataR.responseText);
    postLogo = document.getElementsByClassName("image");
    postTitle = document.getElementsByClassName("post-title");
    postData = document.getElementsByClassName("post-data");

    for(i = 0; i < post_data.length; i++){
        postLogo[i].src = post_data[i].image;
        postTitle[i].innerHTML = post_data[i].topic;
        postData[i].innerHTML = post_data[i].content[0].para2;
    }
}
postDataR.send();
}

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
        a.href = "post.html";
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


//post 

var post = document.getElementsByClassName("post-content")[0];

postDataR.onreadystatechange = function(){
    if(this.readyState==4 && this.status == "200"){
        var post_data = JSON.parse(postDataR.responseText);

        var postCon = document.createElement("div");
        var postImage = document.createElement("img");
        var post_title = document.createElement("h1");
        var post_writer = document.createElement('p');
        var post_meta_data = document.createElement('div');
        var data = document.createElement('div');

        postCon.classList.add("post-con");
        postImage.classList.add("post-image");
        post_title.classList.add("post-title");
        post_meta_data.classList.add('post-info');
        post_writer.classList.add('meta-data');
        data.classList.add('data');

        post.appendChild(postCon);
        postCon.appendChild(postImage);
        postCon.appendChild(post_title);
        postCon.appendChild(post_meta_data);
        post_meta_data.appendChild(post_writer);
        postCon.appendChild(data);

        document.title = post_data[0].topic;
        postImage.src = post_data[0].image;
        post_title.innerHTML = post_data[0].topic;
        post_writer.innerHTML = "<i>Category : </i>"+post_data[0].category +"<br><i>Contributed by : </i>"+"<img src="+post_data[1].writerimage+">"+post_data[0].writer;
        data.innerHTML = "<p>"+post_data[0].content[0].para1+"<br><br>"+post_data[0].content[0].para2+"</p>";
    }
}

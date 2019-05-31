/*js*/
var pageCounter = 1;
var btn = document.getElementById("btn");
var animalCon = document.getElementById("animal-info");
var ourR = new XMLHttpRequest();

btn.addEventListener("click",function(){
    ourR.open("GET","https://imlinuxdude.github.io/Coding/AJAX/file/animal-"+pageCounter+".json");
    ourR.onload = function(){
    var animal = JSON.parse(ourR.responseText);
    
    renderHTML(animal);
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");
    }
};
ourR.send();
});

function renderHTML(data){
    var htmlString = "";
    
    for(i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is " + data[i].species + " and likes ";
        for(j = 0; j < data[i].food.likes.length; j++){
            if(j==0){
                htmlString += data[i].food.likes[j];
            }
            else{
                htmlString += " " + data[i].food.likes[j];
            }
        }
        htmlString += " and dislikes ";
        for(j = 0; j < data[i].food.dislikes.length; j++){
            if(j==0){
                htmlString += data[i].food.dislikes[j];
            }
            else{
                htmlString += " " + data[i].food.dislikes[j];
            }
        }
        htmlString += ".</p>";
    }

    animalCon.insertAdjacentHTML("beforeend",htmlString);
    
}

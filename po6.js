

var mousePosition;
let offsetX = 0;
let offsetY = 0;
var isDown = false;
let up = false;
let currentFontSize = 2;
let toLeft = 0;
let toTop = 0;

let area =document.getElementsByClassName("area");
let drop = document.getElementsByClassName("drop");
button = document.getElementsByClassName("button");
text = document.getElementsByClassName("container");
let div = document.querySelectorAll(".header");

for(var i = 0; i < drop.length; i++){
    drop[i].style.display = "none";
}



for(var i = 0; i < drop.length; i++){
    document.body.appendChild(div[i]);
}



for(var i = 0; i < div.length; i++){
    div[i].addEventListener('mousedown', function(event) {
        isDown = true;
        
        offsetX = event.clientX - parseInt(toLeft);
        offsetY = event.clientY - parseInt(toTop);
        
        up = false;
    
    
    
    }, true);
}


document.addEventListener('mouseup', function() {
    isDown = false;
    





}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };

        for(var i = 0; i < div.length; i++){
            div[i].style.left = (mousePosition.x - offsetX) + 'px';
            div[i].style.top  = (mousePosition.y - offsetY)  + 'px';
            text[i].style.left = (mousePosition.x - offsetX) + 'px';
            text[i].style.top  = (mousePosition.y- offsetY) + 'px';
            button[i].style.left = (mousePosition.x - offsetX + 200) + 'px';
            button[i].style.top  = (mousePosition.y - offsetY + 12.5) + 'px';
            drop[i].style.left = (mousePosition.x - offsetX + 210) + 'px';
            drop[i].style.top  = (mousePosition.y - offsetY + 35) + 'px';  
        }

        for(var i = 0; i < div.length; i++){
            const styles = getComputedStyle(div[0]);
            toLeft = styles.getPropertyValue('left')
            toTop = styles.getPropertyValue('top')
        }
        


    }
}, true);




let background = document.getElementById("thing");
background.addEventListener('click', removeDrop);

function removeDrop(){
    for(var i = 0; i < drop.length; i++){
        drop[i].style.display = 'none';
    }

    up = false;
}

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', dropdown);
}


function dropdown(){
  for(var i = 0;  i < drop.length; i++){
    if(up == false){

        up = true;
        drop[i].style.display = 'block';
    }
    else{
        up = false;
        drop[i].style.display = 'none';
    }
  }
    



}

let fontsize = document.getElementsByClassName("dropdownbtn");

for(var i = 0; i < fontsize.length; i += 3){
    fontsize[i].addEventListener('click', fontchange0)
}
for(var i = 1; i < fontsize.length; i+= 3){
    fontsize[i].addEventListener('click', fontchange1)
}
for(var i = 2; i < fontsize.length; i+= 3){
    fontsize[i].addEventListener('click', fontchange2)
}




function fontchange0(){
   for(var i = 0; i < area.length; i++){
    area[i].style.fontSize = 1 + 'em';
    currentFontSize = 1;
    drop[i].style.display = 'none';
    up = false;
   }

}

function fontchange1(){
    for(var i = 0; i < area.length; i++){
        area[i].style.fontSize = 2 + 'em';
        currentFontSize = 2;
        drop[i].style.display = 'none';
        up = false;
    }


}

function fontchange2(){
    for(var i = 0; i < area.length; i++){
        area[i].style.fontSize = 3 + 'em';
        currentFontSize = 3;
        drop[i].style.display = 'none';
        up = false;
    }

}


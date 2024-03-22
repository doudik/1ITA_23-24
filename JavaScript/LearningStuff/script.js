/* pick random color and apply it to the background
const color = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black", "white"];

document.body.style.backgroundColor = pickRandomColor();    

function pickRandomColor() {
    return color[Math.floor(Math.random() * color.length)];
}
*/
/* Li color change by mouseover event


const liArray = document.querySelectorAll('li');
changeColor();
function changeColor(){
    for(let i = 0; i < liArray.length; i++){
        liArray[i].addEventListener('mouseover', function(){
            liArray[i].style.backgroundColor = randomColor();
    });
}
}

function randomColor() {
    let color = "rgb(" + Math.floor(Math.random() * 556) + ", " + Math.floor(Math.random() * 556) + ", " + Math.floor(Math.random() * 556) + ")";
    return color;
}
*/

/* Create a div and then move it around the screen */
let div = document.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'red';
div.style.position = 'absolute';
div.style.position.X = 0;
document.body.appendChild(div);
/* mouseClick event
div.addEventListener("click", function(){
    div.style.left = 0 + "px";
});*/
let interval = 10;
setInterval(function(){
    moveDiv(direction);
},interval);
function setSpeed(){
    setInterval(function(){
        moveDiv(direction);
    },interval);
}
let direction = "";
document.body.addEventListener("keydown", function(){
    console.log("Key is pressed");
    console.log("Key is: " + event.key)
    switch (event.key) {
        case "x":
            interval = 1;
            setSpeed();
            break;
        case "w":
        direction = "up";
        break;
        case "s":
            direction = "down";
            break;
        case "d":
            direction = "right";
            break;
        case "a":
            direction = "left";
            break;
        default:
            break;
   }
});

function moveDiv(direction){
    switch(direction){
        case "up":
            div.style.top = div.offsetTop - 5 + "px";
            break;
        case "down":
            div.style.top = div.offsetTop + 5 + "px";
            break;
        case "left":
            div.style.left = div.offsetLeft - 5 + "px";
            break;
        case "right":
            div.style.left = div.offsetLeft + 5 + "px";
            break;
        default:
            break;
    }
}


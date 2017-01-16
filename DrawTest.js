var ctx; //context
var lastPt = null; //last point
var touchzone;
var offsetleft = 0; //offset if parent is present
var offsettop = 0; // --||--
var count = 1;

//init/initialize starts when body loads
function init() {
    
    touchzone = document.getElementById("mycanvas"); //define variable "touchzone"
    touchzone.addEventListener("touchmove", draw, false); //Adding event "touchmove", to function "draw"
    touchzone.addEventListener("touchend", end, false); //Adding event "touchend", to function "end"
    ctx = touchzone.getContext("2d"); //defining ctx variable, as 2d plane.
}

function draw(e) { 
    e.preventDefault(); //cancels ongoing event
    
    if (lastPt != null) { //if lastPt is anything BUT null, beginPath...
        
        ctx.beginPath(); //start drawing
        ctx.lineTo(lastPt.x, lastPt.y); //draw a line starting from (x,y)
        ctx.lineTo(e.touches[0].pageX - offsetleft, e.touches[0].pageY - offsettop);
        ctx.stroke();

    }
        lastPt = {x: e.touches[0].pageX - offsetleft, y: e.touches[0].pageY - offsettop};
}

function end(e) {
    e.preventDefault();
    lastPt = null;
}

function countfunc() {
    
    if (count == 1)
    count = 2;
    else if (count == 2)
    count = 1;
}

function black() {
    
    if (count == 1) {
    ctx.strokeStyle = "black";    
    }
    
    else {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, touchzone.width, touchzone.height);  
    }
}

function green() {

    if (count == 1) {
    ctx.strokeStyle = "green";    
    }
    else {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, touchzone.width, touchzone.height);
    }
}

function blue() {
    
    if (count == 1) {
    ctx.strokeStyle = "blue";    
    }
    else {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, touchzone.width, touchzone.height);
    }
  
}

function rød() {
    
    if (count == 1) {
    ctx.strokeStyle = "red";    
    }
    else {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, touchzone.width, touchzone.height);
    }
  
}

function clr() {
    
    ctx.strokeStyle = "rgba(255, 255, 255, 0.01)";
    ctx.clearRect(0, 0, touchzone.width, touchzone.height);
    navigator.vibrate([500,200,500]);
   
}














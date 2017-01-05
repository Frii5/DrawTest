var ctx
var lastPt=null;
var canvas


function init() {
    var touchzone = document.getElementById("mycanvas");
    touchzone.addEventListener("touchmove", draw, false)
    touchzone.addEventListener("touchend", end, false);
    ctx = touchzone.getContext("2d");
}

function draw(e) {
    e.preventDefault();
    
    if(lastPt!=null){ 
        
        ctx.beginPath();
        ctx.lineTo(lastPt.x, lastPt.y);
        ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
        ctx.stroke();

    }
        lastPt = {x:e.touches[0].pageX, y:e.touches[0].pageY};
}
 
function end(e) {
    e.preventDefault
    lastPt=null;
}

function green() {
    ctx.strokeStyle="green";
}

function blue() {
    ctx.strokeStyle="blue";
}

function clear() {
    ctx.strokeStyle="red";
  
}

function red() {
    ctx.strokeStyle="white";
    ctx.clearRect(0, 0, 500, 500);
}

function black() {
    ctx.strokeStyle="black";
}





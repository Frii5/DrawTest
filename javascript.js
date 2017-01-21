var ctx; //context
var lastPt = null; //last point
var touchzone;
var offsetleft = 0; //offset if parent is present
var offsettop = 30; // --||--
var count = 1;
var lineSize = 5;

//init/initialize starts when body loads
function init() {

    touchzone = document.getElementById("mycanvas"); //define variable "touchzone"
    touchzone.addEventListener("touchmove", draw, false); //Adding event "touchmove", to function "draw"
    touchzone.addEventListener("touchend", end, false); //Adding event "touchend", to function "end"
    ctx = touchzone.getContext("2d"); //defining ctx variable, as 2d plane.
    size();
}

function draw(e) {
    e.preventDefault(); //cancels ongoing event

    if (lastPt != null) { //if lastPt is anything BUT null, beginPath...

        ctx.beginPath(); //start drawing
        ctx.lineTo(lastPt.x, lastPt.y); //draw a line starting from (x,y)
        ctx.lineTo(e.touches[0].pageX - offsetleft, e.touches[0].pageY - offsettop);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = lineSize;
        ctx.stroke();

    }
    lastPt = {
        x: e.touches[0].pageX - offsetleft,
        y: e.touches[0].pageY - offsettop
    };
}

function end(e) {
    e.preventDefault();
    lastPt = null;
}

function countfunc(e) {

    if (count == 1) {
        count = 2;
        navigator.vibrate([200]);
        document.getElementById("ChangeMode").style.backgroundColor = "#D32F2F";
        e.preventDefault();

    } else if (count == 2)
        count = 1;
    navigator.vibrate([200]);
    document.getElementById("ChangeMode").style.backgroundColor = "#303F9F";
}

//COLORS

function black() {

    document.getElementById("mySidenav").style.backgroundColor = "#222222";

    if (count == 1) {
        ctx.strokeStyle = "black";
    } else {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, touchzone.width, touchzone.height);
    }
}

function green() {

    document.getElementById("mySidenav").style.backgroundColor = "#1a421c";

    if (count == 1) {
        ctx.strokeStyle = "#388E3C";
    } else {
        ctx.fillStyle = "#388E3C";
        ctx.fillRect(0, 0, touchzone.width, touchzone.height);
    }
}

function blue() {

    document.getElementById("mySidenav").style.backgroundColor = "#104b86";

    if (count == 1) {
        ctx.strokeStyle = "#1976D2";
    } else {
        ctx.fillStyle = "#1976D2";
        ctx.fillRect(0, 0, touchzone.width, touchzone.height);
    }
}

function rød() {

    document.getElementById("mySidenav").style.backgroundColor = "#871e1e";

    if (count == 1) {
        ctx.strokeStyle = "#D32F2F";
    } else {
        ctx.fillStyle = "#D32F2F";
        ctx.fillRect(0, 0, touchzone.width, touchzone.height);
    }

}

function clr() {

    document.getElementById("mySidenav").style.backgroundColor = "#222222";

    ctx.strokeStyle = "rgba(255, 255, 255, 0.01)";
    ctx.clearRect(0, 0, touchzone.width, touchzone.height);
    navigator.vibrate([300, 100, 300]);
}

function size() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

}

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("OpnNavBtn").style.color = "rgba(255, 255, 255, 0.3)";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("OpnNavBtn").style.color = "rgba(255, 255, 255, 1)";

}

function SizeDown() {

    if (lineSize == 1) {
        navigator.vibrate([300]);
    } else {
        lineSize = lineSize - 1;
        document.getElementById("CounterDisplay").innerHTML = lineSize;
    }
}

function SizeUp() {

    if (lineSize == 20) {
        navigator.vibrate([300]);
    } else {
        lineSize = lineSize + 1;
        document.getElementById("CounterDisplay").innerHTML = lineSize;
    }
}
var ctx; //context
var lastPt = null; //last point
var touchzone;
var offsetleft = 0; //offset if any divs
var offsettop = 56; //are present above or beside canvas
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

//DRAW FUNCTIONS

function draw(e) {
    e.preventDefault(); //cancels ongoing event

    if (lastPt != null) { //if lastPt is anything BUT null, beginPath...

        ctx.beginPath(); //start drawing
        ctx.lineTo(lastPt.x, lastPt.y); //draw a line starting from (x,y)
        ctx.lineTo(e.touches[0].pageX - offsetleft, e.touches[0].pageY - offsettop);
        ctx.lineCap = "round"; //Draw line with rounded end caps
        ctx.lineJoin = "round"; //Create rounded corner when two lines meet
        ctx.lineWidth = lineSize; //width of line, determined by variable
        ctx.stroke(); //Draw line

    }
    lastPt = {
        x: e.touches[0].pageX - offsetleft, //This segment of code, ensures that when you
        y: e.touches[0].pageY - offsettop   //disconnect your finger from canvas/screen, 
    };                                      //the drawing stops. This ensures, that two
}                                           //lines wont connect if you start a new one.
                                            //
function end(e) {                           //It works by cancelling the "lastPt", wich is 
    e.preventDefault();                     //defined in the function before.
    lastPt = null;                          //
}

//BUTTON SWITCH

function countfunc(e) { //this function works as a switch

    if (count == 1) {
        count = 2;
        navigator.vibrate([200]); //Vibrate phone for 200 ms
        document.getElementById("ChangeMode").style.backgroundColor = "#D32F2F"; //Set bgcolor of button
        e.preventDefault();

    } else if (count == 2)
        count = 1;
    navigator.vibrate([200]);
    document.getElementById("ChangeMode").style.backgroundColor = "#303F9F";
}

//COLORS

function black() { //all color functions are triggered by their buttons

    document.getElementById("mySidenav").style.backgroundColor = "#222222"; //Change bgcolor of sidenav

    if (count == 1) { //check what mode the switch is in
        ctx.strokeStyle = "black"; //change line to black
    } else {
        ctx.fillStyle = "black"; //Change fill color to black
        ctx.fillRect(0, 0, touchzone.width, touchzone.height); //make a square with the dimensitons of canvas
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

    ctx.strokeStyle = "rgba(255, 255, 255, 0.01)"; //Make invisible stroke
    ctx.clearRect(0, 0, touchzone.width, touchzone.height); //Clear rectangle with canvas dimension
    navigator.vibrate([300, 100, 300]); //long vibrate to indicate clearing
}

function size() { //funciton activates with init, determines canvas size
    ctx.canvas.width = window.innerWidth; 
    ctx.canvas.height = window.innerHeight;

}

function openNav() { //triggers when opennav btn is pressed
    document.getElementById("mySidenav").style.width = "200px"; //opens sidenav
    document.getElementById("main").style.marginLeft = "200px"; //pushes main
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; //fade main out
    document.getElementById("OpnNavBtn").style.color = "rgba(255, 255, 255, 0.3)"; //fade button out

}

function closeNav() { //triggers when closenavbtn is pressed
    document.getElementById("mySidenav").style.width = "0"; //Closes sidenav
    document.getElementById("main").style.marginLeft = "0"; //Pushes main in place
    document.body.style.backgroundColor = "white"; //fade in main
    document.getElementById("OpnNavBtn").style.color = "rgba(255, 255, 255, 1)"; //fade in opnnavbtn

}

function SizeDown() { //triggers when sizeupbtn is pressed

    if (lineSize == 1) { //checks if line is at 1, if it is vibrate the phone
        navigator.vibrate([300]);
    } else {
        lineSize = lineSize - 1; //else, change down (-1)
        document.getElementById("CounterDisplay").innerHTML = lineSize; //display current val of linesize
    }
}

function SizeUp() { //triggers when sizedwnbtn is pressed

    if (lineSize == 20) { //checks if line is at 20, if it is vibrate the phone
        navigator.vibrate([300]);
    } else {
        lineSize = lineSize + 1; //else, change up (+1)
        document.getElementById("CounterDisplay").innerHTML = lineSize; //display current val of linesize
    }
}
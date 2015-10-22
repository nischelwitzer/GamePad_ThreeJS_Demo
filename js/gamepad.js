

// GamePad example
// based on
//      http://www.html5rocks.com/en/tutorials/doodles/gamepad/ 
//      http://tutsplus.github.io/Using-the-HTML5-Gamepad-API/test3.html  

var hasGPad = false;
var repGPad;
var gPadX1, gPadY1;
var gPadX2, gPadY2;


function reportOnGamepad() {
    var gp = navigator.getGamepads()[0];
    var html = "";
        html += "id: "+gp.id+"<br/>";
    
    for(var i=0;i<gp.buttons.length;i++) {
        html+= "Button "+(i+1)+": ";
        if(gp.buttons[i].pressed) html+= " pressed";
        html+= "<br/>";
    }
    
    for(var i=0;i<gp.axes.length; i+=2) {
        html+= "Stick "+(Math.ceil(i/2)+1)+": "+gp.axes[i]+" ### "+gp.axes[i+1]+"<br/>";
        gPadX1 = gp.axes[1];
        gPadY1 = gp.axes[0];
        gPadX2 = gp.axes[3];
        gPadY2 = gp.axes[2];
        
    }
    $("#gamepadDisplay").html(html);
}
    
$(document).ready(function() {

    if("getGamepads" in navigator) {

    var prompt = "To begin using your gamepad, connect it and press any button!";
    $("#gamepadPrompt").text(prompt);

    $(window).on("gamepadconnected", function() {
        hasGPad = true;
        $("#gamepadPrompt").html("Gamepad connected!");
        console.log("connection event");
        repGPad = window.setInterval(reportOnGamepad,100);
    });

    $(window).on("gamepaddisconnected", function() {
        console.log("disconnection event");
        $("#gamepadPrompt").text(prompt);
        $("#gamepadDisplay").html("gamepad disconnected");
        window.clearInterval(repGPad);
    });

    //setup an interval for Chrome
    var checkGP = window.setInterval(function() {
        console.log('checkGP');
        if(navigator.getGamepads()[0]) {
            if(!hasGPad) $(window).trigger("gamepadconnected");
            window.clearInterval(checkGP);
        }
        }, 500);
    }
    
});
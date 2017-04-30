var c = document.querySelector("#c");
var ctx = c.getContext("2d");

ctx.fillRect(100, 100, 100, 100);

ctx.strokeRect(50, 50, 50, 50);

ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(10, 50);
ctx.lineTo(50, 50);
ctx.lineTo(50, 1);
ctx.fill();

ctx.font="36pt Impact";
ctx.fillStyle = "white";
ctx.fillText("NAZEEBO!", 300, 300);

ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeText("NAZEEBO!", 300, 300);

/*
var image = new Image();
image.onload = function() {
    console.log("Loaded Image");
    ctx.drawImage(image, 0 , 0, c.width, c.height);

}

image.src = "images/meme.jpg";
*/

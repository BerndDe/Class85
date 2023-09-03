canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasaimagesarray=["mars.jpg", "mars image 1.jpg", "mars image 2.jpg", "mars image 3.jpg", "mars image 4.jpg"];
randomnumber=Math.floor(Math.random()*5);

rover_width = 100;
rover_height = 90;

background_image = nasaimagesarray[randomnumber];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
	keyPressed=e.keyCode;
	if (keyPressed=="38"){
	   up();
	}
	if (keyPressed=="40"){
		down();
	 }
	 if (keyPressed=="37"){
		left();
	 }
	 if (keyPressed=="39"){
		right();
	 }
}
function up(){
	if(rover_y>=0){
		rover_y=rover_y-10;
		console.log("When Up Arrow Is Pressed, X = "+rover_x+"Y = "+rover_y);
		uploadBackground();
		uploadrover();
	}
}
function down(){
	if(rover_y<=500){
		rover_y=rover_y+10;
		console.log("When Down Arrow Is Pressed, X = "+rover_x+"Y = "+rover_y);
		uploadBackground();
		uploadrover();
	}
}
function left(){
	if(rover_x>=0){
		rover_x=rover_x-10;
		console.log("When Left Arrow Is Pressed, X = "+rover_x+"Y = "+rover_y);
		uploadBackground();
		uploadrover();
	}
}
function right(){
	if(rover_x<=700){
		rover_x=rover_x+10;
		console.log("When Right Arrow Is Pressed, X = "+rover_x+"Y = "+rover_y);
		uploadBackground();
		uploadrover();
	}
}


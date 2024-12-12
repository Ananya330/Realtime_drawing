noseX = 0
noseY = 0
leftWristX = 0
rightWristX = 0
difference = 0






function setup(){

canvas = createCanvas(500,500)
canvas.position(700,250)
video= createCapture(VIDEO)
video.size(500,500)
video.position(50,150)
posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose', gotPoses)

}


function preload(){

}

function modelLoaded(){

console.log("model_loaded") 

}

function gotPoses(results){

if(results.length > 0){

console.log(results);
noseX = results[0].pose.nose.x;
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
noseY = results[0].pose.nose.y;
difference = leftWristX - rightWristX;

}


}


function draw(){

background("rgb(148, 211, 211)")
// /square(x,y,side)
 square(noseX,noseY,difference)
// text("Ananya",noseX,noseY)
// textSize(difference)
fill("plum")
stroke("white")
strokeWeight(5)

}


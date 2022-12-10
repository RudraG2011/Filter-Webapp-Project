nosex=0;
nosey=0;
leftearx=0;
lefteary=0;
function preload(){
clown_nose=loadImage("nose.png");
mustache=loadImage("mustache.png");
Hat=loadImage("Hat.png");
}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(300,300);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    console.log("nosex=" + results[0].pose.nose.x);
    console.log("nosey=" + results[0].pose.nose.y);
  nosex=results[0].pose.nose.x;
  nosey=results[0].pose.nose.y;
  leftearx=results[0].pose.leftEar.x;
  lefteary=results[0].pose.leftEar.y;
}
}

function modelloaded(){
    console.log("Model Has Been Loaded");

}

function draw(){
image(video,0,0,300,300);
image(clown_nose,nosex-25,nosey-25,50,50);
image(mustache,nosex-50,nosey,100,50);
image(Hat,leftearx-180,lefteary-200,200,200);


}

function take_snapshot(){

    save("myfilterimage.png");
}
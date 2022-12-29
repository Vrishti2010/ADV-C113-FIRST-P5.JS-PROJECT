function preload() {
}

function setup() {
canvas = createCanvas(700,500);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();

}

function draw() {
image(video,0,0,700,500);
fill("pink");
stroke("black");
circle(659,41,80);

fill("pink");
stroke("black");
circle(40,41,80);


fill("lightblue");
stroke("black");
circle(659,460,80);

fill("lightblue");
stroke("black");
circle(40,460,80);

}

function takesnapshot(){
    save("image.png");
}
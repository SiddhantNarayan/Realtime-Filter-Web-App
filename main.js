XCoordinate = "";
YCoordinate = "";

function preload()
{
    img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    Posenet = ml5.poseNet(video,ModelLoaded);
    Posenet.on('pose',poseIt)
}

function ModelLoaded()
{
    console.log("PoseNet is Initiallized");
}

function poseIt(position)
{
    if (position.length > 0)
    {
        console.log(position);
        console.log("nose x = "+pose[0].pose.nose.x);
        console.log("Nose Y= "+pose[0].pose.nose.y);
        XCoordinate = pose[0].position.nose.x;
        YCoordinate = pose[0].position.nose.y;
    }
}

function draw()
{
    console.log("Ml5 version - "+ml5.version);
    image(video,0,0,400,400);
    image(img,XCoordinate,YCoordinate,45,45);
}
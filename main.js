noseX=0
noseY=0

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/VNVQ8jfN/CAT-NOSE-removebg-preview.png")
    glasses_img= loadImage("https://i.postimg.cc/SKYg1X2q/pixel-sunglasses-19-700x296-removebg-preview.png")
    hat_image= loadImage("https://i.postimg.cc/d1QJCwZd/Hat-clip-art-borders-free-clipart-images.png")
}

function setup(){
    canvas= createCanvas(300,300)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet= ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("poseisloaded")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        console.log("nosex="+results[0].pose.nose.x)
        console.log("nosey="+results[0].pose.nose.y)
        if(document.getElementById("filters").value=="cat nose"){
            noseX=results[0].pose.nose.x-50
            noseY=results[0].pose.nose.y-50
        }
        else
            if(document.getElementById("filters").value=="hat"){
                noseX=results[0].pose.nose.x-50
                noseY=results[0].pose.nose.y-150
            }
            else if(document.getElementById("filters").value=="sun glasses"){
                noseX=results[0].pose.nose.x-50
                noseY=results[0].pose.nose.y-75
            }
        
       
    }
}

function draw(){
    image(video,0,0,300,300)
    if(document.getElementById("filters").value=="cat nose"){
        image(clown_nose,noseX,noseY,100,100)
    }
    else if(document.getElementById("filters").value=="hat"){
        image(hat_image, noseX, noseY, 100,100)
    }
    else if(document.getElementById("filters").value=="sun glasses"){
        image(glasses_img, noseX, noseY, 80,80)
    }
    
}

function take_snapshot(){
    save("filterNameImage.png")
}
Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");

Webcam.attach(camera);


function click(){
    Webcam.snap(function(pica){
       document.getElementById("photo").innerHTML = '<img id = "pht" src ="' + pica + '">';
    });
}
document.getElementById("check").innerHTMLdisplay = "all"; 
var model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ts1rx_FF-/model.json" , ModelLink);

function ModelLink(){
    console.log("Ml5 version:" , ml5.version);
}

function check(){
    img = document.getElementById("pht");
    classifier.classify(img , answr);
}

function answr(error, imeger){
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(0);
    }
}

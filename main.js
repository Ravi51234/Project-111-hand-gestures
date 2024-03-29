function load_webcam(){

    Webcam.set({
        width:350,
        height:300,
        img_format:"png",
        png_quality:90
    });

    camera = document.getElementById("camera");

    Webcam.attach("#camera");

}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src='" + data_uri + "' id='captured_image'>";
    });
}

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gF4fcUdkWj/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}
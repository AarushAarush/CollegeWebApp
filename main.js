var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start() {
    document.getElementById("textarea").innerHTML = "";
    recognition.start();

}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML = content;
    console.log(content);
    if (content = "take my selfie") {
        console.log("Success");
        Speak();
    }

}

function Speak() {
    var sinth = window.speechSynthesis;
    Speak_Data = "Starting in 5 seconds"; //document.getElementById("textarea").innerHTML;
    var utterThat = new SpeechSynthesisUtterance(Speak_Data);
    sinth.speak(utterThat);
    Webcam.attach(camera);
    setTimeout(
        function () {
            takesnapshot();
            save();

        }, 5000);

}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie" src="' + data_uri + '">';

    });

}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}
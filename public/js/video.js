function streamWebCam(){
  var webcam = document.getElementById('webcam');

  var vendorUrl = window.URL || window.webkitURL;

  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  navigator.getMedia({
    video: true,
    audio: true
  }, function(stream){
    webcam.src = vendorUrl.createObjectURL(stream);
    webcam.play();
  }, function(error){
    console.log(error.code);
  });
}

function pauseWebCam(){

  var webcam = document.getElementById('webcam');
  webcam.pause();

}

function stopWebCam(){

  var webcam = document.getElementById('webcam');
  webcam.src='';
  //mediaElement.removeAttribute("src");

}

function snapshotWebCam(){

  var webcam = document.getElementById('webcam');
  var canvas = document.getElementById('canvas');

  var width = $(webcam).width();
  var height = $(webcam).height();

  //note setting the width and height will make it fix
  //$(canvas).width(width);
  //$(canvas).height(height);

  context = canvas.getContext("2d");
  context.drawImage(webcam,0,0, (1/2) * width, (7/24) * height);

}

function getScreen(){
  var screen = document.getElementById('screen');

  var vendorUrl = window.URL || window.webkitURL;

  navigator.getMedia = navigator.webkitGetUserMedia || navigator.getUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  navigator.getMedia({
    video: {
      mandatory: {
        //chromeMediaSource: 'screen',
        chromeMediaSource: "desktop",
        chromeMediaSourceId: id
        //minAspectRatio: 1.77,
        maxWidth: 1280,
        maxHeight: 720
      }
    },
    audio: false,
    optional: []
  }, function(stream){
    console.log(stream);
    screen.src = window.URL.createObjectURL(stream);
    screen.src = vendorUrl.createObjectURL(stream);
    screen.play();
  }, function(error){
    console.log(error);
  });

}

navigator.getMedia = ( navigator.getUserMedia ||
                 navigator.webkitGetUserMedia ||
                 navigator.mozGetUserMedia ||
                 navigator.msGetUserMedia);

navigator.getMedia({
  video: true
}, function success(localMediaStream) {
  console.log("navigator.getUserMedia succeeded");

  var video = document.querySelector("video");
  video.src = window.URL.createObjectURL(localMediaStream);
}, function error(e) {
  console.log("navigator.getUserMedia failed:");
  console.log(e);
});

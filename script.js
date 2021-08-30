const videoElement = document.getElementById("video_container");
const button = document.getElementById("button");

async function request() {
  try {
    let captureMedia = await navigator.mediaDevices.getDisplayMedia();
    videoElement.hidden = false;
    videoElement.srcObject = captureMedia;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
    // return captureMedia
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", request);

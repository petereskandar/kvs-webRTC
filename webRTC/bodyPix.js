function loadBodyPix(videoElement, canvas) {
    const options = {
      multiplier: 0.75,
      stride: 32,
      quantBytes: 4
    }

    setCanvasDimensions(canvas, videoElement);
    bodyPix.load(options)
      .then(net => perform(net, videoElement, canvas))
      .catch(err => console.log(err))
  }

  async function perform(net, videoElement, canvas) {
      while(true) {
        const segmentation = await net.segmentPerson(videoElement);
        const backgroundBlurAmount = 6;
        const edgeBlurAmount = 2;
        const flipHorizontal = true;
        bodyPix.toMask(segmentation);
        bodyPix.drawBokehEffect(
          canvas, videoElement, segmentation, backgroundBlurAmount,
          edgeBlurAmount, flipHorizontal);
      }
  }

  // setting canvas dimensions dynamically based on parentElement
  function setCanvasDimensions(canvas, videoElement) {
    canvas.height = videoElement.height = videoElement.parentElement.offsetHeight;
    canvas.width = videoElement.width = videoElement.parentElement.offsetWidth;
    videoElement.hidden = true;
    videoElement.muted = true;
    canvas.hidden = false;
  }
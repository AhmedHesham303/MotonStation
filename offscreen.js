const audio = document.getElementById("player");

chrome.runtime.onMessage.addListener((msg) => {
  switch (msg.type) {
    case "play":
      audio.src = msg.source;
      audio.addEventListener("loadedmetadata", () => {
        if (msg.seekTime && msg.seekTime > 0) {
          audio.currentTime = msg.seekTime % audio.duration;
        }
        audio.play();
      }, { once: true });
      break;
    case "pause":
      audio.pause();
      break;
    case "volume":
      audio.volume = msg.volume;
      break;
  }
});

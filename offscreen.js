const audio = document.getElementById("player");

chrome.runtime.onMessage.addListener((msg) => {
  switch (msg.type) {
    case "play":
      audio.src = msg.source;
      audio.play();
      break;
    case "pause":
      audio.pause();
      break;
    case "volume":
      audio.volume = msg.volume;
      break;
  }
});

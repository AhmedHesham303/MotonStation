const audio = document.getElementById("player");

// Send audio state updates to popup
function sendAudioState() {
  chrome.runtime.sendMessage({
    type: "audioState",
    playing: !audio.paused,
    currentTime: audio.currentTime,
    volume: audio.volume,
    duration: audio.duration,
    ended: false
  });
}

// Send time updates every second to keep UI synchronized
setInterval(() => {
  if (!audio.paused) {
    sendAudioState();
  }
}, 1000);

chrome.runtime.onMessage.addListener((msg) => {
  switch (msg.type) {
    case "play":
      audio.src = msg.source;
      audio.addEventListener("loadedmetadata", () => {
        if (msg.seekTime && msg.seekTime > 0) {
          audio.currentTime = msg.seekTime % audio.duration;
        }
        audio.play();
        sendAudioState(); // Send initial state
      }, { once: true });
      break;
    case "pause":
      audio.pause();
      sendAudioState(); // Send state when paused
      break;
    case "volume":
      audio.volume = msg.volume;
      break;
  }
});

// Send state on important audio events
audio.addEventListener("play", sendAudioState);
audio.addEventListener("pause", sendAudioState);
audio.addEventListener("ended", () => {
  // Send ended event when audio finishes
  chrome.runtime.sendMessage({
    type: "audioState",
    playing: false,
    currentTime: 0,
    volume: audio.volume,
    duration: audio.duration,
    ended: true
  });
});

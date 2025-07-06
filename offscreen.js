chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "play-audio" && message.url) {
    const audio = document.getElementById("offscreen-audio");
    audio.src = message.url;
    audio.play();
  }
});

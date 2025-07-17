// Background service worker for handling offscreen document messaging
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.offscreen) {
    // Forward messages to the offscreen document
    chrome.runtime.sendMessage(request);
  }
});

// Handle offscreen document creation
async function createOffscreen() {
  if (await chrome.offscreen.hasDocument()) return;
  await chrome.offscreen.createDocument({
    url: "offscreen.html",
    reasons: ["AUDIO_PLAYBACK"],
    justification: "تشغيل صوت مستمر في الخلفية",
  });
}

// Initialize offscreen document when extension loads
chrome.runtime.onStartup.addListener(() => {
  createOffscreen();
});

chrome.runtime.onInstalled.addListener(() => {
  createOffscreen();
}); 
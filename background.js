// Background service worker for handling offscreen document messaging

async function ensureOffscreenDocument() {
  if (await chrome.offscreen.hasDocument()) return;
  await chrome.offscreen.createDocument({
    url: "offscreen.html",
    reasons: ["AUDIO_PLAYBACK"],
    justification: "تشغيل صوت مستمر في الخلفية",
  });
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.offscreen) {
    await ensureOffscreenDocument();
    // Forward the message to the offscreen document
    chrome.runtime.sendMessage(request);
  }
});

chrome.runtime.onStartup.addListener(() => {
  ensureOffscreenDocument();
});

chrome.runtime.onInstalled.addListener(() => {
  ensureOffscreenDocument();
}); 
// ==== DOM Elements ====
const cardsContainer = document.querySelector(".cards");
const randomButton = document.getElementById("random-play");
const categoryBtn = document.querySelectorAll(".categories button");
const searchInput = document.querySelector(".search");
const about = document.querySelector(".about");
const playLive = document.querySelector(".play-live");
const audioTimeTag = document.getElementById("audio-time-tag");
const audioTimeSpan = document.getElementById("audio-time");
const restartButton = document.getElementById("restart-audio");

// ==== State ====
let currentPlayButton = null;
let currentLiveFile = null;
let selectedCategory = "أهم الصوتيات";
let currentAudioFile = null;

const curFiles = files.filter((file) =>
  file.category.includes(selectedCategory)
);

// ==== Utility Functions ====

function getFilesFromLocalStorage() {
  const matchedFiles = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const file = files.find((f) => f.title === key);
    if (file) matchedFiles.push(file);
  }
  return matchedFiles;
}

function eraseElementClass(elements, className) {
  elements.forEach((el) => el.classList.remove(className));
}

function addElementClass(element, className) {
  element.classList.add(className);
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[\u064B-\u065F]/g, "") // Remove tashkeel
    .replace(/ة/g, "ه") // Normalize taa marbouta
    .replace(/أ|إ|آ/g, "ا") // Normalize different forms of alif
    .trim();
}

function handelBigFiles(file, secondsToday) {
  let index = 0;
  for (let i = 0; i < file.duration.length; i++) {
    const duration = file.duration[i];
    if (secondsToday > duration) {
      secondsToday -= duration;
      index += 1;
    } else {
      return [index, secondsToday];
    }
  }
  // If we exceed all durations, use last index
  return [file.duration.length - 1, secondsToday];
}

// Format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update audio time tag
function updateAudioTimeTag(currentSeconds) {
  if (currentAudioFile && !currentAudioFile.isLive) {
    audioTimeTag.style.display = "inline-flex";
    audioTimeSpan.textContent = formatTime(currentSeconds);
    // Show restart button only when audio is playing
    restartButton.style.display = "inline-block";
  } else {
    audioTimeTag.style.display = "none";
    // Hide restart button when no audio is playing
    restartButton.style.display = "none";
  }
}

// Restart audio from beginning
function restartAudio() {
  if (currentAudioFile && currentAudioFile.file) {
    const file = currentAudioFile.file;
    
    if (file.size === "big") {
      // For big files, restart from first part
      currentAudioFile.currentIndex = 0;
      const firstUrl = file.url[0].trim();
      console.log(`🔄 Restarting big file "${file.title}" from part 1`);
      play(firstUrl, 0);
    } else {
      // For regular files, restart from beginning
      console.log(`🔄 Restarting regular file "${file.title}" from beginning`);
      play(file.url[0].trim(), 0);
    }
  }
}

// Handle audio ending
function handleAudioEnd() {
  if (currentAudioFile && currentAudioFile.file) {
    const file = currentAudioFile.file;
    
    if (file.size === "big") {
      // For big files, go to next file
      const currentIndex = currentAudioFile.currentIndex || 0;
      const nextIndex = currentIndex + 1;
      
      console.log(`🎵 Big file "${file.title}" - Part ${currentIndex + 1} ended, moving to part ${nextIndex + 1}`);
      
      if (nextIndex < file.url.length) {
        // Play next file in the series
        currentAudioFile.currentIndex = nextIndex;
        const nextUrl = file.url[nextIndex].trim();
        console.log(`▶️ Playing part ${nextIndex + 1} of ${file.url.length}`);
        play(nextUrl, 0); // Start from beginning of next file
      } else {
        // End of series, stop
        console.log(`⏹️ Big file "${file.title}" completed all ${file.url.length} parts - stopping`);
        stopAudio(currentPlayButton);
      }
    } else {
      // For regular files, loop back to beginning
      console.log(`🔄 Regular file "${file.title}" ended - looping back to beginning`);
      const now = new Date();
      const factor = Math.ceil(file.total_duration / 86400) || 1;
      let secondsToday = (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()) * factor;
      const seekTimeInFile = secondsToday % (file.total_duration || 1800);
      
      play(file.url[0].trim(), seekTimeInFile);
    }
  }
}

// Save current state
function saveState() {
  const state = {
    selectedCategory: selectedCategory,
    currentAudioFile: currentAudioFile,
    currentPlayButton: currentPlayButton ? currentPlayButton.textContent : null,
    currentLiveFile: currentLiveFile ? currentLiveFile.title : null
  };
  chrome.storage.local.set({ extensionState: state });
}

// Restore state
async function restoreState() {
  try {
    const result = await chrome.storage.local.get(['extensionState']);
    const state = result.extensionState;
    
    if (state) {
      // Restore category
      if (state.selectedCategory) {
        selectedCategory = state.selectedCategory;
        displayByCategory(selectedCategory);
        updateCategoryButtons();
      }
      
      // Restore audio playback if it was playing
      if (state.currentAudioFile && state.currentAudioFile.file) {
        const file = state.currentAudioFile.file;
        const isLive = state.currentAudioFile.isLive;
        
        // Update UI to show current audio
        document.querySelector(".playing-audio").textContent = file.title;
        
        if (isLive) {
          currentLiveFile = file;
          document.querySelector(".section-audio").style.display = "none";
          document.querySelector(".live-audio").style.display = "flex";
          audioTimeTag.style.display = "none";
        } else {
          currentLiveFile = null;
          document.querySelector(".section-audio").style.display = "block";
          document.querySelector(".live-audio").style.display = "none";
          
          // Restore current audio file state
          currentAudioFile = state.currentAudioFile;
          
          // Update time tag if audio is playing
          if (state.currentAudioFile.currentTime) {
            updateAudioTimeTag(state.currentAudioFile.currentTime);
          }
        }
        
        // Update play button state
        if (state.currentPlayButton) {
          // Find the current play button and update its state
          const cards = cardsContainer.querySelectorAll('.card');
          cards.forEach(card => {
            const playBtn = card.querySelector('.play');
            const title = card.querySelector('h3').textContent;
            if (title === file.title) {
              playBtn.textContent = "❚❚";
              currentPlayButton = playBtn;
            } else {
              playBtn.textContent = "▶";
            }
          });
        }
      }
    }
  } catch (error) {
    console.log("Error restoring state:", error);
  }
}

// Update category buttons to show active state
function updateCategoryButtons() {
  categoryBtn.forEach((btn) => {
    if (btn.textContent.trim() === selectedCategory) {
      eraseElementClass(categoryBtn, "active");
      addElementClass(btn, "active");
    }
  });
}

// ==== Playback Logic ====
function playFromTime(file, button) {
  let index = 0;
  if (currentPlayButton && currentPlayButton !== button) {
    currentPlayButton.textContent = "▶";
  }

  currentPlayButton = button;
  button.textContent = "❚❚";

  const now = new Date();
  const factor = Math.ceil(file.total_duration / 86400) || 1;
  let secondsToday =
    (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()) * factor;

  if (file.size === "big") {
    [index, secondsToday] = handelBigFiles(file, secondsToday);
  }

  const selectedUrl = file.url[index].trim();
  const isLive =
    !selectedUrl.endsWith(".mp3") && !selectedUrl.includes("audmat");

  document.querySelector(".playing-audio").textContent = file.title;
  
  // Calculate seek time within the audio file
  let seekTimeInFile = 0;
  if (!isLive) {
    // For regular files, calculate position within the file
    if (file.size === "big") {
      // For big files, seekTimeInFile is already calculated in handelBigFiles
      seekTimeInFile = secondsToday;
    } else {
      // For regular files, use modulo to get position within file
      seekTimeInFile = secondsToday % (file.total_duration || 1800); // Default 30 minutes if no duration
    }
  }
  
  // Store current file info for time display
  currentAudioFile = {
    file: file,
    isLive: isLive,
    seekTimeInFile: seekTimeInFile,
    startTime: secondsToday,
    currentIndex: index
  };

  if (isLive) {
    currentLiveFile = file; // Save live file
    document.querySelector(".section-audio").style.display = "none";
    document.querySelector(".live-audio").style.display = "flex";
    audioTimeTag.style.display = "none"; // Hide time tag for live
    // Send play message to background service worker
    play(selectedUrl);
  } else {
    currentLiveFile = null;
    document.querySelector(".section-audio").style.display = "block";
    document.querySelector(".live-audio").style.display = "none";
    // Show initial time tag
    updateAudioTimeTag(seekTimeInFile);
    // Send play message to background service worker with seek time
    play(selectedUrl, seekTimeInFile);
  }
  
  // Save state after playing
  saveState();
}

function stopAudio(button) {
  pause();
  if (button) button.textContent = "▶";
  audioTimeTag.style.display = "none"; // Hide time tag when stopped
  restartButton.style.display = "none"; // Hide restart button when stopped
  currentAudioFile = null;
  currentPlayButton = null;
  
  // Save state after stopping
  saveState();
}

// ==== Live Button Logic ====
playLive.onclick = () => {
  if (playLive.textContent === "❚❚") {
    stopAudio(playLive);
    currentPlayButton = null;
  } else if (currentLiveFile) {
    playFromTime(currentLiveFile, playLive);
  } else {
    alert("اختر بثًا مباشرًا أولاً.");
  }
};

// ==== Card UI ====
function createCard(file) {
  const card = document.createElement("div");
  card.className = "card";

  const right = document.createElement("div");
  right.className = "card-right";

  const fav = document.createElement("span");
  fav.className = "fav";
  fav.textContent = "♥";

  if (localStorage.getItem(file.title)) {
    fav.classList.add("active");
  }

  fav.addEventListener("click", () => {
    if (fav.classList.contains("active")) {
      fav.classList.remove("active");
      localStorage.removeItem(file.title);
      if (selectedCategory === "المفضلة") {
        card.remove();
      }
    } else {
      fav.classList.add("active");
      localStorage.setItem(file.title, "#ff9800");
    }
  });

  const playBtn = document.createElement("button");
  playBtn.className = "play";
  playBtn.textContent = "▶";

  playBtn.onclick = () => {
    if (playBtn.textContent === "❚❚") {
      stopAudio(playBtn);
      currentPlayButton = null;
    } else {
      playFromTime(file, playBtn);
    }
  };

  const title = document.createElement("h3");
  title.textContent = file.title;

  right.appendChild(playBtn);
  right.appendChild(title);
  card.appendChild(right);
  card.appendChild(fav);

  cardsContainer.appendChild(card);
}

// ==== Filtering ====
function displayByCategory(selectedCategory) {
  const filteredFiles =
    selectedCategory === "المفضلة"
      ? getFilesFromLocalStorage()
      : selectedCategory === "الكل"
      ? files
      : files.filter((file) => file.category.includes(selectedCategory));

  cardsContainer.innerHTML = "";
  filteredFiles.forEach(createCard);
}

function searchFiles(query) {
  const normalizedQuery = normalize(query);
  return files.filter((file) =>
    normalize(file.title).includes(normalizedQuery)
  );
}

// ==== Event Binding ====
function handleCategoryClick() {
  categoryBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.textContent.trim();
      console.log(selectedCategory);
      displayByCategory(selectedCategory);
      eraseElementClass(categoryBtn, "active");
      addElementClass(btn, "active");
      
      // Save state when category changes
      saveState();
    });
  });
}

about.addEventListener("click", () => {
  window.location = "./about.html";
});

// Restart button event listener
restartButton.addEventListener("click", () => {
  restartAudio();
});

searchInput.addEventListener("input", () => {
  const results = searchFiles(searchInput.value);
  cardsContainer.innerHTML = "";
  results.forEach((file) => createCard(file));
});

randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * files.length);
  const randomFile = files[randomIndex];

  cardsContainer.innerHTML = "";
  createCard(randomFile);

  const lastCard = cardsContainer.querySelector(".card:last-child");
  const playBtn = lastCard.querySelector(".card-right .play");

  playFromTime(randomFile, playBtn);
});

// ==== Audio Control Functions ====
async function play(source = "http://live.mp3quran.net:9702/", seekTime = 0) {
  await chrome.runtime.sendMessage({
    source,
    type: "play",
    seekTime: seekTime,
    offscreen: true,
  });
  chrome.action.setBadgeBackgroundColor({ color: "green" });
  chrome.action.setBadgeText({ text: "▶" });
  chrome.storage.local.set({ source, status: "playing" });
}

async function pause() {
  await chrome.runtime.sendMessage({
    type: "pause",
    offscreen: true,
  });
  chrome.action.setBadgeText({ text: "" });
  chrome.storage.local.set({ source: "", status: "paused" });
}

async function setVolume(volume = 1) {
  await chrome.runtime.sendMessage({
    volume,
    type: "volume",
    offscreen: true,
  });
}

// ==== Background Audio State Sync ====
// Listen for messages from background to sync time display
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "audioState") {
    // Update time tag with current playback time
    if (request.currentTime !== undefined && currentAudioFile && !currentAudioFile.isLive) {
      updateAudioTimeTag(request.currentTime);
      // Update current time in state
      currentAudioFile.currentTime = request.currentTime;
      saveState();
    }
    
    // Handle audio ending
    if (request.ended && currentAudioFile) {
      console.log(`🔊 Audio ended event received for: ${currentAudioFile.file.title}`);
      handleAudioEnd();
    }
  }
});

// ==== Init ====
// Initialize with saved state
restoreState().then(() => {
  curFiles.forEach((file) => createCard(file));
  handleCategoryClick();
});

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
let isRestarting = false; // Flag to prevent icon override during restart

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
    
    // Make play icon clickable for all categories
    audioTimeTag.style.cursor = "pointer";
    audioTimeTag.onclick = togglePlayPause;
    
    // Update play icon based on current state - but only if we're not in the middle of a restart
    if (!isRestarting) {
      if (currentPlayButton && currentPlayButton.textContent === "❚❚") {
        // Currently playing, show pause icon
        audioTimeTag.style.setProperty('--play-icon', '"❚❚"');
      } else if (currentPlayButton && currentPlayButton.textContent === "▶") {
        // Currently paused, show play icon
        audioTimeTag.style.setProperty('--play-icon', '"▶"');
      }
    }
    // If currentPlayButton is null or isRestarting is true, don't change the icon (preserve manual setting)
    
    // Always show restart icon for restart button
    restartButton.innerHTML = '<span class="restart-icon">🔄</span>';
    restartButton.title = "التشغيل من بداية المتن";
  } else {
    audioTimeTag.style.display = "none";
    // Hide restart button when no audio is playing
    restartButton.style.display = "none";
  }
}

// Toggle play/pause for all categories
function togglePlayPause() {
  if (currentAudioFile) {
    // Check if audio is currently playing by looking at the play button state
    const isPlaying = (currentPlayButton && currentPlayButton.textContent === "❚❚") ||
      (!currentPlayButton && audioTimeTag.style.getPropertyValue('--play-icon') === '"❚❚"');
    if (isPlaying) {
      // Currently playing, so pause
      pause();
      // Update all play buttons to show play symbol
      if (currentPlayButton) currentPlayButton.textContent = "▶";
      // Update all other play buttons to show play symbol
      const allPlayButtons = cardsContainer.querySelectorAll('.play');
      allPlayButtons.forEach(btn => {
        btn.textContent = "▶";
      });
      currentPlayButton = null;
      // Update the play icon to show play symbol
      audioTimeTag.style.setProperty('--play-icon', '"▶"');
    } else {
      // Currently paused, so play
      if (currentAudioFile.file) {
        const file = currentAudioFile.file;
        if (file.size === "big") {
          // Resume big file from current part
          const currentIndex = currentAudioFile.currentIndex || 0;
          const currentUrl = file.url[currentIndex].trim();
          play(currentUrl, currentAudioFile.currentTime || 0);
        } else {
          // Resume regular file
          play(file.url[0].trim(), currentAudioFile.currentTime || 0);
        }
        // Find and update the current play button
        let found = false;
        const cards = cardsContainer.querySelectorAll('.card');
        cards.forEach(card => {
          const playBtn = card.querySelector('.play');
          const title = card.querySelector('h3').textContent;
          if (title === file.title) {
            playBtn.textContent = "❚❚";
            currentPlayButton = playBtn;
            found = true;
          } else {
            playBtn.textContent = "▶";
          }
        });
        // If no card exists (random mode), just update the audio bar icon
        if (!found) {
          currentPlayButton = null;
          audioTimeTag.style.setProperty('--play-icon', '"❚❚"');
        }
      }
    }
  }
}

// Restart audio from beginning
async function restartAudio() {
  if (currentAudioFile && currentAudioFile.file) {
    const file = currentAudioFile.file;
    
    // Set restarting flag to prevent icon override
    isRestarting = true;
    
    // Find and update the current play button to show pause symbol immediately (only if cards exist)
    let found = false;
    const cards = cardsContainer.querySelectorAll('.card');
    if (cards.length > 0) {
      cards.forEach(card => {
        const playBtn = card.querySelector('.play');
        const title = card.querySelector('h3').textContent;
        if (title === file.title) {
          playBtn.textContent = "❚❚";
          currentPlayButton = playBtn;
          found = true;
        } else {
          // Update all other play buttons to show play symbol
          playBtn.textContent = "▶";
        }
      });
    }
    // If no card exists (random mode), just update the audio bar icon
    if (!found) {
      currentPlayButton = null;
      audioTimeTag.style.setProperty('--play-icon', '"❚❚"');
    }
    
    // Update the play icon in the time tag to show pause symbol immediately
    audioTimeTag.style.setProperty('--play-icon', '"❚❚"');
    
    // Update live button to show pause if this is the current audio
    if (currentLiveFile && currentLiveFile.title === file.title) {
      playLive.textContent = "❚❚";
    }
    
    // Always restart from beginning, regardless of current state
    if (file.size === "big") {
      // For big files, restart from first part
      currentAudioFile.currentIndex = 0;
      const firstUrl = file.url[0].trim();
      console.log(`🔄 Restarting big file "${file.title}" from part 1`);
      await play(firstUrl, 0);
    } else {
      // For regular files, restart from beginning
      console.log(`🔄 Restarting regular file "${file.title}" from beginning`);
      await play(file.url[0].trim(), 0);
    }
    
    // Ensure the play icon shows pause symbol after a short delay
    setTimeout(() => {
      audioTimeTag.style.setProperty('--play-icon', '"❚❚"');
      // Reset restarting flag after delay
      isRestarting = false;
    }, 200);
    
    // Save state after restarting
    saveState();
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
  // Determine playback status for saving
  let status = "paused";
  // If audio bar icon is pause or currentPlayButton is pause, treat as playing
  if ((currentPlayButton && currentPlayButton.textContent === "❚❚") ||
      (!currentPlayButton && audioTimeTag.style.getPropertyValue('--play-icon') === '"❚❚"')) {
    status = "playing";
  }
  const state = {
    selectedCategory: selectedCategory,
    currentAudioFile: currentAudioFile,
    currentPlayButton: currentPlayButton ? currentPlayButton.textContent : null,
    currentLiveFile: currentLiveFile ? currentLiveFile.title : null,
    status: status
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
        // --- Always update audio bar icon based on status, even in random mode ---
        const status = state.status || (state.currentPlayButton ? "playing" : "paused");
        if (!isLive && currentAudioFile) {
          if (status === "playing") {
            audioTimeTag.style.setProperty('--play-icon', '"❚❚"');
          } else {
            audioTimeTag.style.setProperty('--play-icon', '"▶"');
          }
        }
        // --- END ---
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
  if (button) {
    button.textContent = "❚❚";
  }

  const now = new Date();
  const factor = Math.ceil(file.total_duration / 86400) || 1;
  let secondsToday =
    (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()) * factor;

  if (file.size === "big") {
    [index, secondsToday] = handelBigFiles(file, secondsToday);
  }

  const selectedUrl = file.url[index].trim();
  const isLive =
    !selectedUrl.endsWith(".mp3") && !selectedUrl.includes("audmat") || file.title === "المختصر في التفسير";

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
    
    // Update live button to show pause
    playLive.textContent = "❚❚";
    
    // Update all other play buttons to show play (only if cards exist)
    const allPlayButtons = cardsContainer.querySelectorAll('.play');
    allPlayButtons.forEach(btn => {
      if (btn !== button) {
        btn.textContent = "▶";
      }
    });
    
    // Send play message to background service worker
    play(selectedUrl);
  } else {
    currentLiveFile = null;
    document.querySelector(".section-audio").style.display = "block";
    document.querySelector(".live-audio").style.display = "none";
    
    // Update live button to show play
    playLive.textContent = "▶";
    
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
  
  // Update all play buttons to show play symbol
  const allPlayButtons = cardsContainer.querySelectorAll('.play');
  allPlayButtons.forEach(btn => {
    btn.textContent = "▶";
  });
  
  // Update live button to show play
  playLive.textContent = "▶";
  
  if (button) button.textContent = "▶";
  audioTimeTag.style.display = "none"; // Hide time tag when stopped
  restartButton.style.display = "none"; // Hide restart button when stopped
  
  currentAudioFile = null;
  currentPlayButton = null;
  currentLiveFile = null;
  
  // Save state after stopping
  saveState();
}

// ==== Live Button Logic ====
playLive.onclick = () => {
  console.log("Live button clicked, current state:", playLive.textContent);
  console.log("currentLiveFile:", currentLiveFile);
  console.log("currentAudioFile:", currentAudioFile);
  
  if (playLive.textContent === "❚❚") {
    // Currently playing, so pause
    pause();
    playLive.textContent = "▶";
    
    // Update only the current play button to show play
    if (currentPlayButton) {
      currentPlayButton.textContent = "▶";
    }
    
    currentPlayButton = null;
  } else {
    // Currently paused, so play
    if (currentLiveFile) {
      // Resume live file
      playFromTime(currentLiveFile, playLive);
    } else if (currentAudioFile && currentAudioFile.isLive) {
      // Resume current live audio
      playFromTime(currentAudioFile.file, playLive);
    } else {
      // No live file available, but we can still toggle the button state
      playLive.textContent = "❚❚";
      
      // Find the card button that matches the current audio and update it
      if (currentAudioFile && currentAudioFile.file) {
        console.log("Looking for card button for:", currentAudioFile.file.title);
        const cards = cardsContainer.querySelectorAll('.card');
        cards.forEach(card => {
          const playBtn = card.querySelector('.play');
          const title = card.querySelector('h3').textContent;
          console.log("Checking card:", title, "against:", currentAudioFile.file.title);
          if (title === currentAudioFile.file.title) {
            console.log("Found matching card, updating button to ❚❚");
            playBtn.textContent = "❚❚";
            currentPlayButton = playBtn;
          }
        });
      } else {
        console.log("No currentAudioFile found");
      }
    }
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
      // Currently playing, so pause
      pause();
      playBtn.textContent = "▶";
      
      // Update live button to show play (same state)
      playLive.textContent = "▶";
      
      currentPlayButton = null;
    } else {
      // Currently paused, so play
      playFromTime(file, playBtn);
      
      // Update live button to show pause (same state)
      playLive.textContent = "❚❚";
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
  let filteredFiles;
  
  if (selectedCategory === "المفضلة") {
    filteredFiles = getFilesFromLocalStorage();
  } else if (selectedCategory === "الكل") {
    filteredFiles = files;
  } else if (selectedCategory === "متن عشوائي") {
    // For random category, don't show any cards
    filteredFiles = [];
  } else {
    filteredFiles = files.filter((file) => file.category.includes(selectedCategory));
  }

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

  // Clear current state
  if (currentPlayButton) {
    currentPlayButton.textContent = "▶";
    currentPlayButton = null;
  }
  
  // Stop any currently playing audio
  pause();
  
  // Clear cards completely for random category
  cardsContainer.innerHTML = "";
  
  // Update selected category to random
  selectedCategory = "متن عشوائي";
  updateCategoryButtons();
  
  // Start playing the random file directly without creating a card
  playFromTime(randomFile, null);
  
  // Save state
  saveState();
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
  // Only create cards if not in random category
  if (selectedCategory !== "متن عشوائي") {
    let filesToShow = [];
    if (selectedCategory === "المفضلة") {
      filesToShow = getFilesFromLocalStorage();
    } else if (selectedCategory === "الكل") {
      filesToShow = files;
    } else {
      filesToShow = files.filter((file) => file.category.includes(selectedCategory));
    }
    filesToShow.forEach((file) => createCard(file));
  } else {
    cardsContainer.innerHTML = "";
  }
  handleCategoryClick();
});


const audioPlayer = document.getElementById("audioGet");
const playPauseBtn = document.getElementById("playPauseBtn");
const audioImg = document.getElementById("audioImg");
const nameSong = document.getElementById("nameSong");
const nameArtists = document.getElementById("nameArtists");
var i = 0;
const audioImgList = [
  "images/song1.webp",
  "images/song2.webp",
  "images/song3.webp",
  "images/song4.jpg",
  "images/song5.jpg",
  "images/song6.jpg",
];
const audioList = [
  "audios/a.mp3",
  "audios/a2.mp3",
  "audios/a3.mp3",
  "audios/a4.mp3",
  "audios/a5.mp3",
  "audios/a6.mp3",
];
const nameOfSong = [
  "In Slow Motion",
  "AMALGAM",
  "FLOW",
  "Bedardi Se Pyar",
  "Lut Gaye",
  "Barish",
];
const nameOfArtists = [
  "soundBay",
  "Rocket",
  "Loksii",
  "Jubin Nautiyal",
  "Jubin Nautiyal",
  "Stebin Bin",
];
const seekbar = document.getElementById("seekbar");

// Update seekbar as audio plays
audioPlayer.addEventListener("timeupdate", function () {
  seekbar.value = audioPlayer.currentTime / audioPlayer.duration;
});

// Allow seeking
seekbar.addEventListener("click", function (event) {
  const percent = event.offsetX / this.offsetWidth;
  audioPlayer.currentTime = percent * audioPlayer.duration;
  seekbar.value = percent / 100;
});

// Update seekbar max value when metadata is loaded
audioPlayer.addEventListener("loadedmetadata", function () {
  seekbar.max = audioPlayer.duration;
});

function playPauseFun() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML =
      '<i class="fa-solid fa-pause" style="color: #ffffff;"></i>';
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML =
      '<i class="fa-solid fa-play" style="color: #ffffff;"></i>';
  }
}

function stopFun() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  playPauseBtn.innerHTML =
    '<i class="fa-solid fa-play" style="color: #ffffff;"></i>';
  seekbar.value = 0;
}

function nextFun() {
  i = (i + 1) % audioList.length;
  audioPlayer.src = audioList[i];
  audioImg.src = audioImgList[i];
  audioPlayer.play();
  playPauseBtn.innerHTML =
    '<i class="fa-solid fa-pause" style="color: #ffffff;"></i>';
  nameArtists.innerHTML = nameOfArtists[i];
  nameSong.innerHTML = nameOfSong[i];
  seekbar.value = 0;
}

function prevFun() {
  i = (i - 1 + audioList.length) % audioList.length;
  audioPlayer.src = audioList[i];
  audioImg.src = audioImgList[i];
  nameArtists.innerHTML = nameOfArtists[i];
  nameSong.innerHTML = nameOfSong[i];
  audioPlayer.play();
  playPauseBtn.innerHTML =
    '<i class="fa-solid fa-pause" style="color: #ffffff;"></i>';
  seekbar.value = 0;
}
  var myCarousel = new bootstrap.Carousel(document.getElementById('albumCarousel'), {
    interval: false // Disable auto-sliding
  })

  
const songs = [
  {
    name: "Perfect",
    link: "https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1",
    artists: "Ed Sheeran",
    image: "https://www.dropbox.com/s/crlthbozdznb13g/perfect.jpeg?raw=1",
  },
  {
    name: "7 Rings",
    link: "https://www.dropbox.com/s/yo5tcfdjoz95ozf/7-rings.mp3?raw=1",
    artists: "Ariana Grande",
    image: "https://www.dropbox.com/s/gobvfxj4r0t053v/7-rings.jpg?raw=1",
  },
  {
    name: "Happier",
    link: "https://www.dropbox.com/s/zp1xfir101y4sc3/happier.mp3?raw=1",
    artists: "Marshmello",
    image: "https://www.dropbox.com/s/xxmwcz14hkn7iwl/happier.png?raw=1",
  },
  {
    name: "Stay",
    link: "https://www.dropbox.com/s/umam9olakop001d/stay.mp3?raw=1",
    artists: "Justin Bieber",
    image: "https://www.dropbox.com/s/kierj5lzst1yx9n/stay.jpg?raw=1",
  },
  {
    name: "Girls Like You",
    link: "https://www.dropbox.com/s/yi1cpg16snrl3fc/girls-like-you.mp3?raw=1",
    artists: "Maroon 5",
    image: "https://www.dropbox.com/s/ouq5zzgbqsk9zx0/girls-like-you.png?raw=1",
  },
];

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("play");
let animatedImage = document.getElementById("animatedImage");
var index = 0;

var img = document.querySelector("img");

var title = document.querySelector("#title");
var thumb = document.querySelector("#thumb");
var artist = document.querySelector("#singer");

var start = document.querySelector("#start");
var end = document.querySelector("#end");

song.src = songs[index].link;

title.innerHTML = songs[index].name;
artist.innerHTML = songs[index].artists;
thumb.src = songs[index].image;

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;

  setInterval(() => {
    var min = Math.floor(song.duration / 60);
    var sec = Math.floor(song.duration % 60);

    var curMin = Math.floor(song.currentTime / 60);
    var curSec = Math.floor(song.currentTime % 60);

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (curSec < 10) {
      curSec = "0" + curSec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (curMin < 10) {
      curMin = "0" + curMin;
    }

    end.innerHTML = min + ":" + sec;
    start.innerHTML = curMin + ":" + curSec;
  }, 1000);
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    img.classList.remove("play"); // Stop the rotation when paused
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    img.classList.add("play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    if (song.currentTime == song.duration) {
      nextPlay();
    }
  }, 1000);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
  img.classList.add("play");
};

function nextPlay() {
  index = index + 1;
  if (index > songs.length) {
    index = 0;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  } else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  }
}

function prevPlay() {
  index = index - 1;
  if (index < 0) {
    index = songs.length;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  } else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  }
}

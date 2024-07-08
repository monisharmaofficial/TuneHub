var arr = [
  {
    songName: "Sun Maahi",
    url: "./Audio/Sun Maahi - Armaan Malik 320 Kbps.mp3",
    img: "./Images/Sun-Maahi.png",
  },
  {
    songName: "You",
    url: "./Audio/You - Making Memories 128 Kbps.mp3",
    img: "./Images/you.png",
  },
  {
    songName: "WOH",
    url: "./Audio/WOH - Ikka 320 Kbps.mp3",
    img: "./Images/woh2.png",
  },
  {
    songName: "TERE TE",
    url: "./Audio/TERE TE - Hidden Gems 320 Kbps.mp3",
    img: "./Images/terete.png",
  },
  {
    songName: "Players",
    url: "./Audio/Players - 3 00 AM Sessions 320 Kbps.mp3",
    img: "./Images/playerr.png",
  },
  {
    songName: "Thar",
    url: "./Audio/Thar - Komal Chaudhary 320 Kbps.mp3",
    img: "./Images/thaar.png",
  },
  {
    songName: "With you",
    url: "./Audio/With You - AP Dhillon 320 Kbps.mp3",
    img: "./Images/withyou.png",
  },
  {
    songName: "Calm Down",
    url: "./Audio/Calm Down - Rema 320 Kbps.mp3",
    img: "./Images/calmdown.png",
  },
  {
    songName: "Kudi Chamkeeli",
    url: "./Audio/Kudi Chamkeeli - Selfiee 320 Kbps.mp3",
    img: "./Images/kudi.png",
  },
  {
    songName: "Afgan Jalebi",
    url: "./Audio/Afghan Jalebi (Ya Baba) - Phantom 320 Kbps.mp3",
    img: "./Images/afgan.png",
  },
  {
    songName: "Sajni Re",
    url: "./Audio/Sajni - Laapataa Ladies 320 Kbps.mp3",
    img: "./Images/s2.png",
  },
  {
    songName: "So Dukh Kesa Paave",
    url: "./Audio/So Dukh Kaisa Paave - Jassie Gill 320 Kbps.mp3",
    img: "./Images/dukh.png",
  },
];
// console.log(arr);

allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#images");

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var audio = new Audio();

var selectedSong = 0;

function mainFunction() {
  var clutter = "";

  arr.forEach(function (elem, index) {
    clutter += `  <div class="song-card" id=${index}>
                    <div class="part1">
                        <img src= ${elem.img} alt="">
                        <h2> ${elem.songName}</h2>
                    </div>
                    <h6>3:30</h6>
                </div>`;
  });

  allSongs.innerHTML = clutter;

  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}
mainFunction();

allSongs.addEventListener("click", function (dets) {
  //console.log("dets.target.id")
  selectedSong = dets.target.id;
  mainFunction();
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  audio.play();
});

var flag = 0;

play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    mainFunction();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.4;
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.4;
  }
});

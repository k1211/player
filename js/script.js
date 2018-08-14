var song1 = {"id": "0", "title" : "Still don't know", "author" : "Icona Pop", "time" : "3:16"};
var song2 = {"id": "1", "title" : "Girlfriend", "author" : "Icona Pop", "time" : "3:16"};
var song3 = {"id": "2", "title" : "Still don't know", "author" : "Icona Pop", "time" : "3:16"};
var song4 = {"id": "3", "title" : "Still don't know", "author" : "Icona Pop", "time" : "3:16"};
var song5 = {"id": "4", "title" : "Still don't know", "author" : "Icona Pop", "time" : "3:16"};

var songs = [song1, song2, song3, song4, song5];

$( document ).ready(init);


function init() {
	generateSongs();
	let songElements = document.getElementsByClassName("song");
	
	for(let i = 0; i < songElements.length; i++) {
		songElements[i].onclick = goToPlayer;
	}
}


function showPlayer(e) {
	player = document.getElementById("player");
	playlist = document.getElementById("playlist");
	console.log("player" + player);
		console.log("playlist" + playlist);


	player.removeAttribute('hidden');
	playlist.setAttribute('hidden', true);
}


function showPlaylist(e) {
	player = document.getElementById("player");
	playlist = document.getElementById("playlist");

	player.setAttribute('hidden', true);
	playlist.removeAttribute('hidden');
}


function getSongNumber(clickedElement) {
	let condition = true;
	while(condition) {
		let parent = clickedElement.parentElement;
		if (parent.className === "song") {
			condition = false;
			return parent.id;
		}
		clickedElement = parent;
	}
}


function initPlayer(songNumber) {
	document.getElementById("piosenka").innerHTML = "Piosenka numer " + songNumber;
}

function goToPlayer(e) {
	let songNumber = getSongNumber(e.target);
	initPlayer(songNumber);
	showPlayer();
}


function generateSongs() {
    for(let i = 0; i < songs.length; i++) {
    	$("#song-section")
			.append(
				$('<div class="song" id="' + songs[i].id+ '">')
				.append(
					$('<div class="song-details">')
					.append($('<div class="song-time-and-author">')
						.append('<p id="song-time">' + songs[i].time + ' &nbsp;|&nbsp; </p> <p id="song-author">' + songs[i].author + '</p> '))
					.append($('<p id="song-title">' + songs[i].title + '</p> '))
				)
				.append(
					$('<div class="social">')
					.append($('<a><i class="fas fa-heart"></i></a>'))
					.append($('<a><i class="fas fa-share-alt"></i></a>'))
				)
			);
	}
}



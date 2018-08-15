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
	initPlayer(0);
	showPlaylist();
}


function getSongById(songId) {
	for (let i = 0; i < songs.length; i++) {
		if (songs[i].id == songId) {
			return songs[i]
		}
	}
}


function showPlayer() {
	$("#playlist" ).addClass("hidden");
	if ($("#main-player").hasClass("hidden")) {
		$("#main-player").removeClass("hidden");	
	}
	// document.getElementById("main-player").removeAttribute('hidden');
	// document.getElementById("playlist").setAttribute('hidden', true);
}


function showPlaylist() {
	$("#main-player").addClass("hidden");
	if ($("#main-player").hasClass("hidden")) {
		$("#playlist").removeClass("hidden");	
	}
	// document.getElementById("playlist").removeAttribute('hidden');
	// document.getElementById("main-player").setAttribute('hidden', true);
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
	let song = getSongById(songNumber);
	generateNowPlaying(song);
	generateConsole(song);
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

function generateNowPlaying(song) {
	$("#now-playing").empty();
    $("#now-playing")
		.append('<div> <p id="song-title">' + song.title + '</p> <p id="song-author">' + song.author + '</p> </div>');
}

function generateConsole(song) {
	$("#playing-options").empty();
    $("#playing-options")
		.append('<a><div id="share"><i class="fas fa-share-alt"></i></div></a>')
		.append('<div>')
		.append('<a><div id="share"><i class="fas fa-heart"></i></div></a>');
}


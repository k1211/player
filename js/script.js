var song1 = {"id": "0", "title" : "Still don't know", "author" : "Icona Pop", "time" : "3:16"};
var song2 = {"id": "1", "title" : "Love it", "author" : "Icona Pop", "time" : "2:35"};
var song3 = {"id": "2", "title" : "Girlfriend", "author" : "Icona Pop", "time" : "2:50"};
var song4 = {"id": "3", "title" : "We got the World", "author" : "Icona Pop", "time" : "3:07"};
var song5 = {"id": "4", "title" : "Nights like this", "author" : "Icona Pop", "time" : "3:24"};

var songs = [song1, song2, song3, song4, song5];
var playing = false;


$(init);

function init() {
	generateSongs();
    
    $( ".song" ).each(function( index ) {
        $( this ).click(goToPlayer);
    });
    
	initPlayer(0);
	showPlayer();
}


function getSongById(songId) {
	for (let i = 0; i < songs.length; i++) {
		if (songs[i].id == songId) {
			return songs[i];
		}
	}
}


function showPlayer() {
	$(".playlist" ).addClass("hidden");
	if ($(".main-player").hasClass("hidden")) {
		$(".main-player").removeClass("hidden");	
	}
}


function showPlaylist() {
	$(".main-player").addClass("hidden");
	if ($(".main-player").hasClass("hidden")) {
		$(".playlist").removeClass("hidden");	
	}
}


function getSongNumber(clickedElement) {
	if (clickedElement) {
		let condition = true;
		while(condition) {
			let parent = clickedElement.parentElement;
			if (parent.classList.contains('song')) {
				condition = false;
				return parent.id;
			}
			clickedElement = parent;
		}
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
    	$(".song-section")
			.append(
				$('<div class="song" id="' + songs[i].id+ '">')
				.append(
					$('<div class="song-details">')
					.append($('<div class="song-time-and-author">')
						.append('<p class="song-time">' + songs[i].time + ' &nbsp;|&nbsp; </p> <p class="song-author">' + songs[i].author + '</p> '))
					.append($('<p class="song-title">' + songs[i].title + '</p> '))
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
	$(".now-playing").empty();
    $(".now-playing")
		.append('<div> <p class="song-title">' + song.title + '</p> <p class="song-author">' + song.author + '</p> </div>');
}

function generateConsole(song) {
	$(".playing-options").empty();
    $(".playing-options")
		.append('<a><div class="share"><i class="fas fa-share-alt"></i></div></a>')
		.append(
			$('<div class="player-console">')
			.append('<a onclick="playPreviousSong('+ song.id +')"><div class="console-button"><i class="fas fa-step-backward"></i></div></a>')
			.append('<a onclick="controlPlaying()"><div class="play-button-1">' + 
							'<div class="console-button play-button-2"><i class="fas fa-pause"></i></div>' + 
							'<div class="play-progress"> </div>' +
					'</div></a>')
			.append('<a onclick="playNextSong('+ song.id +')"><div class="console-button"><i class="fas fa-step-forward"></i></div></a>')
		)
		.append('<a><div class="share"><i class="fas fa-heart"></i></div></a>');
}

function playNextSong(songId) {
	let currentSong = songId + 1;
	if (currentSong > songs.length-1) {
		currentSong = songId;
	}
	initPlayer(currentSong);
}

function playPreviousSong(songId) {
	let currentSong = songId - 1;
	if (currentSong < 0) {
		currentSong = songId;
	}
	initPlayer(currentSong);
}

function controlPlaying() {
	if (playing) {
		$('.play-button-2').html('<i class="fas fa-pause"></i>');
		playing = false;
	} else {
		$('.play-button-2').html('<i class="fas fa-play"></i>');
		playing = true;
	}	
}
var song1 = {"id": "1", "title" : "Still don't know", "author" : "Icona Pop", "time" : "3:16"};
var song2 = {"id": "2", "title" : "Girlfriend", "author" : "Icona Pop", "time" : "3:16"};
var song3 = {"id": "3", "title" : "Still don't know", "author" : "Icona Pop", "time" : "3:16"};
var song4 = {"id": "4", "title" : "Still don't know", "author" : "Icona Pop", "time" : "3:16"};
var song5 = {"id": "5", "title" : "Still don't know", "author" : "Icona Pop", "time" : "3:16"};

var songs = [song1, song2, song3, song4, song5];


$( document ).ready(generateSongs);

function generateSongs() {
    for(let i = 0; i < songs.length; i++) {
    	$("#song-section")
			.append(
				$('<div class="song">')
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
			// 		.append('<div class="song-time-and-author"> ')
			// 			.append('<p id="song-time">' + songs[i].time + ' &nbsp;|&nbsp; </p> ')
			// 			.append('<p id="song-author">' + songs[i].author + '</p>  ')
			// 		.append('</div')
			// 	.append('</div>')
			// 	.append('<div class="social">')
	}
}



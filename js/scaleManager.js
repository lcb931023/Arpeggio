// Apparently noteFreqs isn't the actual frequency of the note. (lol)
// It's only used for display purpose, and uses some interesting calculation blablablabla things I don't need to care.
// BUTT! This should be very easy to research.

// http://www.phy.mtu.edu/~suits/notefreqs.html
// Table of frequency.
// each octave of a single note has doubled frequency
// I can have ranges of octave (of how many times it gets timed) (get it, times timed, hehehe)
// starting at C0!

// 12 equal temperament
var basenoteFreqs = [
16.35, // C
17.32, // C#
18.35, // D
19.45, // Eb
20.60, // E
21.83, // F
23.12, // F#
24.50, // G
25.96, // G#
27.50, // A
29.14, // Bb
30.87  // B
];

var Scales = {
	"Natural"	: [ 0, 2, 4, 5, 7, 9, 11 ],
	"Harmonic"	: [ 0, 2, 3, 5, 7, 8, 11 ],
	"Pentatonic": [ 0, 2, 4, 7, 9],
	"Jazz"		: [ 0, 2, 3, 5, 7, 9, 11 ],
	"Blues"		: [ 0, 3, 5, 6, 7, 10 ],
	"Flamenco"	: [ 0, 1, 4, 5, 7, 8, 11 ],
	"Japanese"	: [ 0, 2, 3, 7, 8],
	"JapaneseYo": [ 0, 3, 5, 7, 11 ],
	"Algerian"	: [ 0, 2, 3, 5, 6, 7, 10 ],
	"WholeTone"	: [ 0, 2, 4, 6, 8, 10 ],
	"Enigmatic"	: [ 0, 1, 4, 6, 8, 9, 11 ],
	"Tritone"	: [ 0, 1, 4, 6, 7, 10 ],
	"Gypsy"		: [ 0, 2, 3, 6, 7, 8, 10 ]
}

var curOctave = 0; // for displaying octave

function setScaleBase( inScaleKey ) {
	var inScale = Scales[inScaleKey];
	scaleBase = [];
	for (var i = 0; i < inScale.length; i++) {
		scaleBase.push(basenoteFreqs[inScale[i]]);
	};
}

function mapFreqToNote(inFreq) {
	if (inFreq == 0 ) return 0;
	var tOctave = 0;
	// find the clost octave the freq can ceil to
	while (inFreq > basenoteFreqs[0] * Math.pow(2, tOctave)) // scale starts at C.
	{
		tOctave ++;
	}
	//console.log(tOctave);
	curOctave = tOctave;
	for (var i = 0; i < scaleBase.length; i++) { // for every note in a scale
		// find the closest note the freq can ceil to
		
		if ( inFreq >= scaleBase[i] * Math.pow(2, tOctave - 1) ){
			//inFreq = scaleBase[i] * Math.pow(2, tOctave - 1);
		} else {
			return scaleBase[i] * Math.pow(2, tOctave - 1);
		}
	};
	
	//console.log("inFreq: " + inFreq);
	return scaleBase[0] * Math.pow(2, tOctave);
}

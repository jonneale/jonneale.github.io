"use strict"

const container = document.getElementById("pantheonContainer");
const godsToCreate = 10;
const godWidth = 11;
const godHeight = 11;
const PIXEL_WIDTH = 5;
const PIXEL_HEIGHT = 5;
const MIN_NAME_LENGTH = 3;


const COLOURS = 
[[
'#2f0f07',
'#470f07',
'#D75F07',
'#BFAF2F',
'#FFFFFF'],
['#18192B',
'#103540',
'#AE1C25',
'#C86429',
'F#1E7BC'],
['#A73743',
'#FCF6D9',
'#ADBFCB',
'#78848E',
'#464C53'],
['#591f0a',
'#d65108',
'#efa00b',
'#0075c4',
'#0267c1'],
['#BC9579',
'#F9CD54',
'#EAB74C',
'#D0BF5B',
'#FDF2B0'],
['#FFFEFD',
'#2D3D32',
'#284959',
'#1A8471',
'#1A1615'],
['#47A58D',
'#748D69',
'#C56143',
'#DD4B49',
'#DDD18A']];

const GOD_NAMES = ["Aesir",
"Andhrimnir",
"Angrboda",
"Astrild",
"Atla",
"Audhumla",
"Balder",
"Beyla",
"Borghild",
"Bragi",
"Brono",
"Bylgia",
"Dagur",
"Disen",
"Eir",
"Elli",
"Fenrir",
"Forseti",
"Freya",
"Freyr",
"Frigg",
"Gefion",
"Gerd",
"Heimdall",
"Hel",
"Hermod",
"Hod",
"Holler",
"Idun",
"Jord",
"Jormungand",
"Kari",
"Kvasir",
"Laga",
"Lofn",
"Loki",
"Magni",
"Mani",
"Miming",
"Mimir",
"Modi",
"Njord",
"Norns",
"Nott",
"Odin",
"Ran",
"Saga",
"Sif",
"Sjofn",
"Skadi",
"Sleipnir",
"Sol",
"Syn",
"Thor",
"Tyr",
"Ull",
"Vali",
"Valkyries",
"Vanir",
"Var",
"Vidar"];

var adjectives = [
'aggressive',
'aloof',
'arrogant',
'belligerent',
'big-headed',
'bitchy',
'boastful',
'bone-idle',
'boring',
'bossy',
'callous',
'cantankerous',
'careless',
'changeable',
'clinging',
'compulsive',
'conservative',
'cowardly',
'cruel',
'cunning',
'cynical',
'deceitful',
'detached',
'dishonest',
'dogmatic',
'domineering',
'finicky',
'flirtatious',
'foolish',
'foolhardy',
'fussy',
'greedy',
'gullible',
'harsh',
'impatient',
'impolite',
'impulsive',
'inconsiderate',
'inconsistent',
'indecisive',
'indiscreet',
'inflexible',
'interfering',
'intolerant',
'irresponsible',
'Machiavellian',
'materialistic',
'mean',
'miserly',
'moody',
'narrow-minded',
'nasty',
'naughty',
'obsessive',
'obstinate',
'overcritical',
'overemotional',
'parsimonious',
'patronizing',
'perverse',
'pessimistic',
'pompous',
'possessive',
'pusillanimous',
'quarrelsome',
'quick-tempered',
'resentful',
'ruthless',
'sarcastic',
'secretive',
'selfish',
'self-centred',
'self-indulgent',
'silly',
'sneaky',
'stingy',
'stubborn',
'stupid',
'superficial',
'tactless',
'timid',
'touchy',
'truculent',
'unkind',
'unpredictable',
'unreliable',
'untidy',
'untrustworthy',
'vague',
'vain',
'vengeful',
'vulgar',
'weak-willed',
'angry',
'bewildered',
'clumsy',
'defeated',
'embarrassed',
'fierce',
'grumpy',
'helpless',
'jealous',
'lazy',
'mysterious',
'nervous',
'obnoxious',
'panicky',
'pitiful',
'repulsive',
'rude',
'scary',
'thoughtless',
'uptight',
'worried',
'adaptable',
'adventurous',
'affable',
'affectionate',
'agreeable',
'ambitious',
'amiable',
'amicable',
'amusing',
'brave',
'bright',
'broad-minded',
'calm',
'careful',
'charming',
'communicative',
'compassionate',
'conscientious',
'considerate',
'convivial',
'courageous',
'courteous',
'creative',
'decisive',
'determined',
'diligent',
'diplomatic',
'discreet',
'dynamic',
'easygoing',
'emotional',
'energetic',
'enthusiastic',
'exuberant',
'fair-minded',
'faithful',
'fearless',
'forceful',
'frank',
'friendly',
'funny',
'generous',
'gentle',
'good',
'gregarious',
'hard-working',
'helpful',
'honest',
'humorous',
'imaginative',
'impartial',
'independent',
'intellectual',
'intelligent',
'intuitive',
'inventive',
'kind',
'loving',
'loyal',
'modest',
'neat',
'nice',
'optimistic',
'passionate',
'patient',
'persistent',
'pioneering',
'philosophical',
'placid',
'plucky',
'polite',
'powerful',
'practical',
'pro-active',
'quick-witted',
'quiet',
'rational',
'reliable',
'reserved',
'resourceful',
'romantic',
'self-confident',
'self-disciplined',
'sensible',
'sensitive',
'shy',
'sincere',
'sociable',
'straightforward',
'sympathetic',
'thoughtful',
'tidy',
'tough',
'unassuming',
'understanding',
'versatile',
'warmhearted',
'willing',
'witty'];

function getLetterOccurences(s){
	var dict = {};
	for(var i = 0; i < s.length-1; i++){
		if (s[i] in dict){
			dict[s[i]] += s[i+1];
		}
		else{
			dict[s[i]] = s[i+1];
		}
	}
	return dict
}

const namesAsSingleString = GOD_NAMES.join("*").toLowerCase();
const letterOccurences = getLetterOccurences(namesAsSingleString);

function runMarkovChain(letter){
	var letters = letterOccurences[letter];
	return(getRandomElement(letters))
}

function getRandomElement(a){
	return a[Math.floor(Math.random()*a.length)]
}

function generateGodName(){
	var firstLetters = GOD_NAMES.map(x => x[0]);
	var name = '';
	var currentLetter = getRandomElement(firstLetters);
	while (currentLetter != '*' || name.length < MIN_NAME_LENGTH) {
		if(currentLetter !='*'){
			name+=currentLetter
		}
		currentLetter = getRandomElement(letterOccurences[currentLetter.toLowerCase()])
	}
	return name + " the " + adjectives.splice(Math.floor(Math.random()*adjectives.length), 1);
}

function drawGod(canvas) {
	var context = canvas.getContext("2d")
	var colourPallete = getRandomElement(COLOURS);
	for(var y = 0; y < godHeight; y++){
		for(var x = 0; x < godWidth/2; x++){
			context.fillStyle = getRandomElement(colourPallete);
			context.fillRect(x*PIXEL_WIDTH,y*PIXEL_WIDTH,PIXEL_WIDTH,PIXEL_HEIGHT);
			context.fillRect((godWidth-x)*PIXEL_WIDTH,y*PIXEL_WIDTH,PIXEL_WIDTH,PIXEL_HEIGHT);
		}
	}
}

function createCanvas(godSpan){
	var canvas = document.createElement('canvas');
	canvas.width = godWidth*PIXEL_WIDTH;
	canvas.height = godHeight*PIXEL_HEIGHT;
	canvas.style.border = "1px solid";
	container.appendChild(godSpan);	
	return canvas
}

function createGod(){
	var godSpan = document.createElement('span');
	godSpan.classList.add("god");
	var canvas = createCanvas(godSpan);
	godSpan.appendChild(canvas);
	drawGod(canvas);
	var godNameSpan = document.createElement('span');
	godNameSpan.textContent= generateGodName();
	godSpan.appendChild(canvas);
	godSpan.appendChild(godNameSpan);
}

function generateHistory(){
	
}

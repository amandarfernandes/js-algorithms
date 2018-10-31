const isSingleRiffle = (shuffledDeck,half1,half2) =>{
	if (shuffledDeck.length ===  0)
		return true;
	if (half1.length && shuffledDeck[0]=== half1[0])
		return isSingleRiffle(shuffledDeck.slice(1,-1),half1.slice(1,-1),half2);
	else if  (half2.length && shuffledDeck[0]=== half2[0])
		return isSingleRiffle(shuffledDeck.slice(1,-1),half1,half2.slice(1,-1));
	return false;
}

const deck = Array(52).fill().map((card,index)=>index+1);
let half1 = Array(26).fill().map((card,index)=>index+1);
let half2 = Array(26).fill().map((card,index)=>index+27);

if (isSingleRiffle(deck,half1,half2)) {
	console.log("It's a single riffle");
} else {
	console.log("It's not a single riffle");
}

half1 = Array(26).fill().map((card,index)=>index*2+2);
half2 = Array(26).fill().map((card,index)=>index*2+1);

if (isSingleRiffle(deck,half1,half2)) {
	console.log("It's a single riffle");
} else {
	console.log("It's not a single riffle");
}

half2 = Array(26).fill().map((card,index)=>index*2+2);
half1 = Array(26).fill().map((card,index)=>index*2+1);

if (isSingleRiffle(deck,half1,half2)) {
	console.log("It's a single riffle");
} else {
	console.log("It's not a single riffle");
}

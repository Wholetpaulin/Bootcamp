//Pangram pseudocode
//Convert every letter of the string toLowerCase and remove puncuation
//Iterate through the string and ensure ASCII codes 97-122 (a-z) are all "checked off"

//NEVER GOT THIS TWERKING... COME BACK TO THIS..
var pangram = function(input){

	var werd = input.replace(/\./g, "");
	werd = werd.toLowerCase();
	asciiArray = [];
	var state = true;

	for(var i = 97; j <123; j++){				//i loop creates an array with numbers 97-122
		asciiArray.push(j);
	}

	for(var j = 0; j < werd.length; j++){		//j loop is for checking each char in the input string
		if(asciiArray.includes(werd.charCodeAt(j))){	//And 'checks off' every charCode in the array
			console.log(charCodeAt(werd[j]));
		}else state = false;
	}

	console.log(state);
}


pangram(`The quick brown fox jumps over the lazy dog.`);
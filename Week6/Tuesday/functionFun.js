//functionFun!

function example(input, callback) {
	console.log(input);
    callback();
}

example('ham', function() {
	console.log("blah blah blah Should be printed last because it's a callback.");
});

//--------------------------------------------------------------

function truthy(input, callback) {
	if(input){
		callback();
	}
    
}

truthy(true, function() {
	console.log("blah blah blah");
});

//---------------------------------------------------------------

function accept(callback, value) {
		callback();
    
}
function FonV(f, v) {
	return //f on v
    
}
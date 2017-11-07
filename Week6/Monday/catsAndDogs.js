//object practice
var dog = {
	raining: true,
	noise: "Woof!",

	makeNoise: function(){
		if(dog.raining){
			console.log(dog.noise);
		}
    }

}

var kyle = {
	name: "kyle",
	noise: "Meow!",

	makeNoise: function(){
		if(cat.raining){
			console.log(cat.noise);
		}
    }


}

function massHysteria(dog, cat){
	if(dog.raining && cat.raining){
		console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
	}
}

///////////FUNCTION CALLS
dog.makeNoise();
cat.makeNoise();

massHysteria(dog,cat);
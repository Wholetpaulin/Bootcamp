//Pseudocode

//We're interested in the last 4* characters of each element in the array.
	//files.length - 4

//if(filename ends in ".jpg" || ".gif" || "jpeg" || ".png")  Put that shit in dat image array

//if(filename ends in ".mov" || ".avi" || "mpeg" || ".mp4" || ".mpg")  Put that shit in dat image array


$(document).ready(function() {

  var files = [								//We're given an array files with all kinds of different file types
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];

  var images = [];
  var videos = [];						//initilize empty image and video arrays

for(var i = 0; i < files.length; i++){
	console.log(files[i].length);
	var lastFour = files[i].substring((files[i].length - 4),(files[i].length));
	//				
	if(lastFour === ".jpg" ||lastFour === ".gif" || lastFour === "jpeg" || lastFour === ".png"){
		 images.push(files[i]);
	}
	if(lastFour === ".mov" || lastFour === ".avi" || lastFour === "mpeg" || lastFour === ".mpg" || lastFour === ".mp4"){
		 videos.push(files[i]);
	}
		
		/*
	switch (lastFour) {
      case '.jpg':
        images.push(files[i]);
        break;
      case '.gif':
        images.push(files[i]);
        break;
      case 'jpeg':
        images.push(files[i]);
        break;
      case '.png':;
        images.push(files[i]);
        break;
      case '.mov':
        videos.push(files[i]);
        break;
      case '.avi':
        videos.push(files[i]);
        break;
      case 'mpeg':
        videos.push(files[i]);
        break;
      case '.mpg':
        videos.push(files[i]);
        break;
      case '.mp4':
        videos.push(files[i]);
        break;
      default:
        console.log("Something broke!");
        break;
    }	
    */
}

console.log(images);
console.log(videos);

});
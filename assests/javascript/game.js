// <!-- 4 elements containing crystals with random numbers tied to them, between 1-12-->
// <!-- a new random number will be generated after each win/loss -->
// <!-- when a crystal is clicked on, its value should add to a total -->
// <!-- if total equals a random numbe generated, wins will increase one -->
// <!-- if total surpasses the random number generated, losses will increase one -->

var random_result;
var loss = 0;
var win = 0;
var previous = 0;




var beginGame = function(){
    $(".crystals").empty();

    var images = [
        'https://cdn-images-1.medium.com/max/2600/0*AmwIyi21fDd9Guwz.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/7125NT4a7PL._SX425_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fH0ceu5pHcYwLEnOX7_EzBqWcQzmJTbh0gv6IEJ4ndDViNLG',
        'https://i.pinimg.com/236x/1d/e6/92/1de692ac8dc11b976acd924c1dd90a3d--crystal-drawing-google-search.jpg',
    ];

    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Random Result: ' + random_result);
    for (var i =0; i < 4; i++) {

     var random = Math.floor(Math.random() * 11) + 1;
    //  console.log(random);
     var crystal = $("<div>");
     crystal.attr({"class": 'crystal',
        "data-random": random
    });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        })
        // crystal.html(random);
        $(".crystals").append(crystal);
    } 
    $("#previous").html("Total Score: " + previous);
}
beginGame();

$(document).on('click', ".crystal", function(){
    console.log($(this).attr('data-random'));
    
    var num = parseInt($(this).attr('data-random'));
    // var result = num + 5; 
    // console.log(num, ' + ', result); 

    previous += num;

    $("#previous").html("Total Score: " + previous);  
    console.log(previous);
    if(previous > random_result){
        loss++;
        $("#loss").html("You lost: " + loss);
        console.log("you lose");
        previous = 0;
        beginGame();
    }
    else if(previous === random_result){
        win++;
        console.log("win");
        $("#win").html("You win: " + win);
        previous = 0;  
        beginGame();

    }



});
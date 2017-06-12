var dances= ["the carlton","the charleston","the bop","the cha cha", "breakdance","ballet","dougie","tap","capoeira","dab"];
//styling js
var count = 2
$( document ).ready(function() {


function blinking(){

if (count%5===0){
  $("h1").css("color", "blue")
}else if (count%5===1){
  $("h1").css("color", "red");
}else if (count%5===2){
  $("h1").css("color", "green");
}else if (count%5===3){
  $("h1").css("color", "purple");
}else{
  $("h1").css("color", "yellow");
}
}



var blinkers = setInterval(function(){
  console.log(count++);
  blinking();
}, 500)

blinkers;







  function makeButtons() {

        $("#buttons-view").empty();
        for (var i = 0; i < dances.length; i++) {

          var danceBtn = $("<button>");
          danceBtn.addClass("danceClass");
          danceBtn.attr("data-input", dances[i]);
          danceBtn.text(dances[i]);
          danceBtn.val(dances[i])
          $("#buttons-view").append(danceBtn);
        }
      }  
  function gifsList() {
    $("#image-view").empty();
  var search = $(this).val();
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+search+"&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      // for (var i = 0; i < response.data.length; i++) {
      //   console.log(response.data[i].rating);
        // console.log(response.data[i].bitly_url);
      // }
      console.log(response.data[0]);
        for (var i = 0; i < response.data.length; i++) {
        var theUrl = response.data[i].images.fixed_height.url;
        var newDiv =$("<div>")

        var gifImage =$("<img>");
        gifImage.attr("src", theUrl);
        var ratings =$("<div>");
        var theRating = response.data[i].rating;
        newDiv.append(gifImage);
        newDiv.append(ratings.html("Rating: " +theRating));
        $("#image-view").append(newDiv);
        
        

        // $("#image-view").html("Rating:"+theRating)
        
        // $("#image-view").append(ratings);




}
    });
 
}
   

    

      // Function for displaying movie data
     
      makeButtons()
      $("#add-dance").on("click", function(event) {
        event.preventDefault();
        var dancer = $("#dance-input").val();

        dances.push(dancer);


        makeButtons();
      });

      
      $(document).on("click", ".danceClass", gifsList);


      makeButtons();
      });

      // });

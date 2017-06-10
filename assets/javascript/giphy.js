var dances= ["the carlton","the charleston","the bop","the cha cha", "breakdance","ballet","dougie","tap","capoeira","dab"];
    
var search;
var queryURL;
     
     
  function displayGifInfo() {
   $(".danceClass").click(function(){
  search = $(this).attr("#dance-name").val()
  queryURL = "http://api.giphy.com/v1/gifs/trending?q="+search+"&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        console.log(response.data[i].rating);
        console.log(response.data[i].bitly_url);
      }
      // console.log(response.data.);
    })
  })
};
   

    

      // Function for displaying movie data
      function makeButtons() {

        $("#buttons-view").empty();
        for (var i = 0; i < dances.length; i++) {

          var danceBtn = $("<button>");
          danceBtn.addClass("danceClass");
          danceBtn.attr("data-name", dances[i]);
          danceBtn.text(dances[i]);
          danceBtn.val(dances[i])
          $("#buttons-view").append(danceBtn);
        }
      }

      $("#add-dance").on("click", function(event) {
        event.preventDefault();
       var dancer = $("#dance-name").val();
       
        dances.push(dancer);

      
        makeButtons();
      });

      
      $(document).on("click", ".danceClass", displayGifInfo());
      makeButtons();

var up_voted = false;
var down_voted = false;
var up_vote_counter = JSON.parse($("#up_votes_count").data("up_counter"));
var down_vote_counter = JSON.parse($("#down_votes_count").data("down_counter"));

// initialize upvote and downvote counter

$(document).ready(function() {
  console.log(up_vote_counter, down_vote_counter);
  $("#thumbs_up").click(function () {
    up_voted = !up_voted;
    $('#thumbs_up').toggleClass('fa-thumbs-up fa-thumbs-o-up');
    
    // insert code for calculating new upvote counter
    
    if (up_voted) {
      $('#thumbs_down').addClass('disabled');
    } else {
      $('#thumbs_down').removeClass('disabled');
    }
  });
  
  $("#thumbs_down").click(function () {
    down_voted = !down_voted;
    $('#thumbs_down').toggleClass('fa-thumbs-down fa-thumbs-o-down');
    
    // insert code for calculating new down vote counter
    if (down_voted) {
      $('#thumbs_up').addClass('disabled');
    } else {
      $('#thumbs_up').removeClass('disabled');
    }
  });
});

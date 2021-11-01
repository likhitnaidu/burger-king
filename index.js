$(document).ready(function () {

    
$("#popup").hide().fadeIn(1000);

 //close the POPUP if the button with id="close" is clicked
$("#close").on("click", function (e) {
    e.preventDefault();
    $("#popup").fadeOut(1000);
});

});

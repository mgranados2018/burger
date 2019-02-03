


// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".change-burgerstate").on("click", function(event) {
    event.preventDefault();
    
    var id = $(this).data("id");

    var newBurgerState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("added new burger", newBurgerState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});

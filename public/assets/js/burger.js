
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var addBurger = {
      burger_name: $("#newBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: addBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


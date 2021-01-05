$(document).ready(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    let addBurger = {
      burger_name: $("#newBurger").val().trim(),
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: addBurger,
    }).then(function () {
      console.log("created new Burger");

      location.reload();
    });
  });

  $(".eat-it").on("click", function (event) {
    let id = $(this).data("id");
    let ateBurger = $(this).data("ateburger");
    console.log(ateBurger);
    let body = {
      devoured: ateBurger,
    };

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: body,
    }).then(function () {
      location.reload();
    });
  });
  $(".delete-it").on("click", function (event) {
    let id = $(this).data("id");

    $.ajax("/api/burger/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);

      location.reload();
    });
  });
});

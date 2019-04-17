$(document).ready(function () {
    $(".submit").on("click", function (event) {
        event.preventDefault();

        // Here we grab the form elements
        var newInventory = {
            Item_Name: $("#item-name").val().trim(),
            Item_desc: $("#item-desc").val().trim(),
            item_category: $("#item-category").val().trim(),
            item_Qty: $('#item-Qty').val().trim(),
            Item_img: $("#item-img").val().trim(),
            Starting_bid_price: $("#Starting_bid").val().trim(),
            // End_bid_price:  $("#End_bid").val().trim()
        }

        $.post("/adminInventory", newInventory,
            function (data) {

                // If a table is available... tell user they are booked...
                if (data) {
                    alert("Yay! You are officially booked!");
                }

                // If a table is available... tell user they on the waiting list.
                else {
                    alert("Sorry you are on the wait list");
                }

                // Clear the form when submitting

                $("#item-name").val(""),
                    $("#item-desc").val(""),
                    $("#item-category").val(""),
                    $('#item-Qty').val(""),
                    $("item-img").val(""),
                    $("#Starting_bid").val(""),
                    $("#End_bid").val("")

            });

        console.log(newInventory)
    })



    //test
    // $.post("/api/tables", newInventory,
    //   function(data) {

    //     // If a table is available... tell user they are booked.
    //     if (data) {
    //       alert("Yay! You are officially booked!");
    //     }

    //     // If a table is available... tell user they on the waiting list.
    //     else {
    //       alert("Sorry you are on the wait list");
    //     }

    //     // Clear the form when submitting
    //     // $("#reserve-name").val("");
    //     // $("#reserve-phone").val("");
    //     // $("#reserve-email").val("");
    //     // $("#reserve-unique-id").val("");

    //     $("#item-name").val(""),
    //     $("#item-desc").val(""),
    //     $("#item-category").val(""),
    //     $('#item-Qty').val(""),
    //     $("item-img").val(""),
    //     $("#Starting_bid").val(""),
    //     $("#End_bid").val("")

    //   });

});
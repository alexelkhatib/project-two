// Make a get request to our api route that will return every book
$.get("/api/jewelry", function (data) {
    // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
        // Create a parent div to hold book data
        var wellSection = $("<div>");
        // Add a class to this div: 'well'
        wellSection.addClass("inven");
        // Add an id to the well to mark which well it is
        wellSection.attr("id", "exotic-inven-" + i);
        // Append the well to the well section
        $("#well-section").append(wellSection);

        // Now  we add our book data to the well we just placed on the page
        $("#exotic-inven-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
        $("#exotic-inven-" + i).append("<h3>Animals: " + data[i].animals + "</h4>");
        $("#exotic-inven-" + i).append("<h3>Cars: " + data[i].cars + "</h4>");
        $("#exotic-inven-" + i).append("<h3>Jewelry: " + data[i].jewelry + "</h4>");
        $("#exotic-inven-" + i).append("<h3>Art: " + data[i].art + "</h4>");
    }
});
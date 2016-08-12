$('#search').keydown(function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    if ($('#jumbo').children().length > 0) {
      $("#jumbo").fadeOut(400);
      $("#jumbo").empty();
    }
    var searchTerm = document.getElementById("search").value;
    console.log(searchTerm);
    $("#search").val("");
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&search=" + searchTerm + "&namespace=0&callback=?", function(data) {
      for (var i = 0; i < data[1].length; i++) {
        $("#jumbo").hide().append("<div class='jumbotron'>" + "<h1>" + data[1][i] + "</h1>" + "<p1 class='smaller-font'>" + data[2][i] + "</p1>" + "<a class='font3' href='" + data[3][i] + "' target='_blank'></br><i>" + "read more" + "</i></a>").fadeIn(400);
      }
    });
  }
});
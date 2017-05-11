$("document").ready(function() {
    $("#content").append("<p>The page just loaded</p>");

    var newP = $("<p>");
    newP.append("<em>Hello There</em>");

    $("#example").html(newP);

    setTimeout(function() {
        $("#content").prepend(newP);
    }, 5000);

});

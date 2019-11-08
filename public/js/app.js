$("#scrape-btn").on("click", function (event) {
    event.preventDefault();

    //is supposed to get all articles
$.get("/api/articles", function(data, err) {
    
    //for every article in the array
    data.forEach(article => {
        var displayDiv = $("#displayDiv");
        var articleDisplay = $("<div>");
        
        //Building an article using jQuery
        articleDisplay.append("<h2>").text(article.headline);
        articleDisplay.append("<p>").text(article.summary);
        articleDisplay.append("<a>").attr("href", article.url).text("Article Url");

        //appends each articleDisplay to displayDiv
        displayDiv.append(articleDisplay);
    });
  });
});
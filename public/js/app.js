$("#scrape-btn").on("click", function (event) {
    event.preventDefault();
$.get("/api/articles", function(data, err) {
    
    data.forEach(article => {
        var displayDiv = $("#displayDiv");
        var articleDisplay = $("<div>");
        
        articleDisplay.append("<h2>").text(article.headline);
        articleDisplay.append("<p>").text(article.summary);
        articleDisplay.append("<a>").attr("href", article.url).text("Article Url");

        displayDiv.append(articleDisplay);
    });
  });
});
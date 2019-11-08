var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function (app) {

  app.get("/api/articles", function (req, res) {

    //Going through the allsides site
    axios.get("https://www.allsides.com/unbiased-balanced-news").then(function (response) {
      var $ = cheerio.load(response.data);

      //For every div with the class of view-content
      $(".view-content").each(function () {
        var article = {};

        //Save the values from each targeted html element
        article.headline = $(this).find(".story-id-top-content").find("h2").text();
        article.summary = $(this).find(".story-description").find("p").text();
        article.url = $(this).find(".field-content").children("a").attr("href");

        //Create an article using values above
        db.Article.create(result)
          .then(function (dbArticle) {
            console.log(dbArticle);
          })
          .catch(function (err) {
            console.log(err);
          });
      });

      //Getting all article from Articles Table
      db.Article.find({})
        .then(function (dbArticle) {
          res.json(dbArticle);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  });
};
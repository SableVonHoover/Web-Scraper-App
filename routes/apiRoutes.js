var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function (app) {

  app.get("/api/articles", function (req, res) {
    axios.get("https://www.allsides.com/unbiased-balanced-news").then(function (response) {
      var $ = cheerio.load(response.data);

      $(".view-content").each(function () {
        var article = {};

        article.headline = $(this).find(".story-id-top-content").find("h2").text();
        article.summary = $(this).find(".story-description").find("p").text();
        article.url = $(this).find(".field-content").children("a").attr("href");

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
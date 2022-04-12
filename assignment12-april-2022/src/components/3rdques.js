const axios = require("axios").default;
const cheerio = require("cheerio");
axios
.get("https://agilecrm.com")
.then((response) => {
const $ = cheerio.load(response.data);
const featuredArticles = $("a");
for (let i = 0; i < featuredArticles.length; i++) {
    postLink = $(featuredArticles[i]).attr("href");

console.log("\n" + `Links- ${postLink}`);
console.log("\n----\n\n");
}
})
.catch((err) => console.log("Fetch error " + err));



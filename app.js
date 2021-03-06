const functions = require("./functions")

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine","hbs");

app.use("/assets",express.static(path.join(__dirname, "./assets")));
app.use("/js",express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res){
    res.render("index", {
        pageTitle:"Zajęcia 27.02",
        subTitle: "NodeJS",
        subsubTitle: functions.someText,
        subsubsubTitle: functions.someFunction(),
    })
})
app.get("/about", function (req, res){
    res.send("Strona o mnie")
})

app.get("/about/ala", function (req,res){
    res.send("Strona o Ali")
})

app.listen(port, (err) => {
    if (err) {return console.log(`Wystąpił błąd: ${err}`)}
    console.log(`Aplikacja działa na porcie ${port}`)
});



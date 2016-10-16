var express = require("express");
var app = express();

// Visiting "/" should print "Hi there, welcome to my assignment!"

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!");
});

/*
Visiting "/speak/pig" should print "The pig says 'Oink'"
Visiting "/speak/cow" should print "The cow says 'Moo'"
Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
*/

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    }

    var sound = sounds[animal];

	res.send("The " + animal + " says: '" + sound +"'");
});

/*
Visiting "/repeat/hello/3" should print "hello hello hello"
Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
Visiting "/repeat/blah/2"  should print "blah blah"
*/

app.get("/repeat/:message/:count", function(req, res){
    var subreddit = req.params.message;
    var count = Number(req.params.count);
    var print = "";
    for (i = 0; i < count; i++) {
        print += subreddit + " ";
    }
    res.send(print); 
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!"); 
});

app.get("*", function(req, res){
  	res.send("Sorry, page not found...What are you doing with your life?"); 
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() {
    console.log("Server has started!!!");
});
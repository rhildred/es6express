import express from 'express';

// Create a new express application instance
const app = express();

// be a regular web server from the www folder
app.use(express.static("www"));

app.get("/users/:uname", (req, res) => {
    // the user surfed to http://localhost:300/users/Rich
    res.end("Greetings earthling " + req.params.uname + " ... Happy Friday!:)");
});

// try to figure out the port to use. In Heroku it is an an environment variable
var port = process.env.PORT || parseInt(process.argv.pop()) || 3000;

app.listen(port, () => {
    // the application is now listening in the node event loop
    console.log('Example app listening on port ' + port + '!');
});

const express = require("express");

const app = express();

// app.use((req, res) =>{
//     console.log("w got a request");
//     //res.send("Hellom we got your request! This is your response")
//     res.send({color: "red"})
//     //res.send("<h1>This is a webpage</h1>")
// });

// home directory
app.get("/", (req, res) => {
    res.send("This is the home page")
});

app.get("/r/:subreddit", (req, res) => {
    //console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
});

app.get("/r/:subreddit/:postId", (req, res) => {
    //console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>viewing post id ${postId} on subreddit ${subreddit}</h1>`)
});

app.get("/cats", (req, res) => {
    //console.log("CAT REQUEST \n MeoOoOoOoOw!!")
    res.send("MeoOoOoOoOw");
});

app.get("/dogs", (req, res) => {
    //console.log("CAT REQUEST \n MeoOoOoOoOw!!")
    res.send("woOf woOf");
});



app.post("/cats", (req, res) => {
    res.send("Post request to /cats! \n This is not the same as a get request");
});

app.get("/search", (req, res) => {
    //console.log(req.query)
    const { q } = req.query;
    if (!q) {
        res.send("nothing found if nothing search")
    }
    else {
        res.send(`<h1>Search result for ${q}</h1>`)
    }

});

app.get("*", (req, res) => {
    res.send("this is a generic response for all gets requests\n do not know tha path")
});




app.listen(3000, () => {
    console.log("listening in port 3000...");
});


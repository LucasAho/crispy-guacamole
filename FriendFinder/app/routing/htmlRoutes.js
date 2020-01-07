app.get("/:path", (req,res) => {
    let path = req.params.path; 
    switch(path) {
        case "/":
            res.sendFile(path.join(__dirname, "home.html"));
            break;
        case "/survey":
            res.sendFile(path.join(__dirname, "survey.html"))
            break;
    }
});

// app.listen(PORT, function() {
//     //server listening
// })
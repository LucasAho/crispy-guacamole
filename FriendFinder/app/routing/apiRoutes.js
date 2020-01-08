//Friends array 
let friends = [

];
//Api get
app.get("/api/friends", (req,res) => {
    res.json(friends);
});
//Api post
app.post('/api/friends', (req, res) => {
    friends.push(req.body);
    res.send("Data successfully added to friend finder");
});


// ==============================================================================
// DEPENDENCIES
// ==============================================================================
let friendsData = require("../data/friends");

// ======================================
// ROUTING
// ======================================
module.exports = app => {

    //Friends api
    app.get("/api/friends", (req,res) => {
        res.json(friendsData);
    });
    
    //Api post
    app.post('/api/friends', (req, res) => {
        friendsData.push(req.body);
        res.send("Data successfully added to friend finder");
        res.json(true);
    });

}




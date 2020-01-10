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
        res.json(friendsData.friendsArray);
    });
    
    
    //Api post
    app.post('/api/friends', (req, res) => {
        res.json(friendsData.friendFinder(req.body));   
        friendsData.friendsArray.push(req.body);
    });


}





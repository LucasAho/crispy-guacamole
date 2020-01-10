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
        friendsData.friendsArray.push(req.body);
        console.log(friendsData.friendFinder(req.body));   
    });


}





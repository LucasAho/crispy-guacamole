// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var path = require("path");

// ======================================
// ROUTING
// ======================================
module.exports = app => {

    //Survey page
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require("express");


// ==============================================================================
// EXPRESS CONFIG
// ==============================================================================

//Notifies node of created server
const app = express();

//Initial port
const PORT = process.env.PORT || 8080

//Init expresss for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

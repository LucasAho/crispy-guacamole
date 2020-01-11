// ==============================================================================
// DEPENDENCIES
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
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

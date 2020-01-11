# Repo Discription
This repo holds Friend Finder, a homework assignment with my bootcamp that utilizes Node and Express servers to build an API and program that links similar personalities found in a personality survey. A user will need to fill out a survey about themselves, which is sent into the server and compared to other surveys until a closest match is found.


## Purpose and Function
This app servers as a rudimentary version of social media sites like Facebook and Twitter, pairing users with similar qualities in order to find them a "friend". To use the app, a user needs only to visit the main website, take the survey, and wait for a pop-up modal displaying their best match. To host your own version of the website, a user must install all node dependencies, and set up server.js with node to run while others use the site. For the purposes of delivering this homework, I have deployed the website to Heroku.

## File Infrastructure
### Friend Finder
Contains App folder, gitignore, package.json, the README, and the base server.js file which runs the program on local host.
* server.js: Creates PORT variable and creates routes to the routing files.
* gitignore: node_modules is ignored and an installing user will need to run npm init

### App 
* Data: hold friends.js, the storage spot for new entries and the location of the friend finder algorithm
* Public: Holds the starter html site: home. Also holds survey, which contains the html for the actual survey, and the jquery for the modal, ajax post, and verification to ensure users properly fill out survey
* Routing: The two routing files each make use of exported file modules. apiRoutes handles all posts and get to friends.js, and calls the friendFinder function
htmlRoutes holds the paths to the home/default page, and the survey page where all the magic happens.

### Installation
An installing user will need their own npm init to create a node_modules file. User will also need to install the npm packages express and path. Once all files are in the FriendFinder folder, run node server.js in the terminal. If the webpage "localhost:8080" is opened, it ought to open home.html, where a user can add their own data to the API while using their own machine as a server.



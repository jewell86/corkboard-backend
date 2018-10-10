# CORKBOARD - Server & Database Repo

------------------------------
![](https://bit.ly/2OhSG4E)


### ABOUT THIS PROJECT
Corkboard is a full-stack native iOS app built in Swift with two server-side database servers. Corkboard is for users who want to share items from their phone with their friends and family in one central spot. Just register for an account and start adding items to your board! Users can add other users to a board to have collaborative boards with each other. Items that can be added currently include notes, images & videos from your phone or taken live, website thumbnail links and a thumbnail map that links to directions in the browser (more items to come soon, keep checking back!). 

The Swift front-end repo is available at github.com/jewell86/swift-corkboard

**Will be available to download free for iOS in Test Flight soon, please check back often for updates!**

**Email jewellsmailbox@gmail.com if you’d ike to be notified of it’s availability**

Currently to run this app, Xcode is a requirement. 

### To install the server & database to run locally:

-clone this repo to your local machine

-in terminal run:
createdb corkboard_dev
npm install
npm run migrate
npm run seed
npm run dev-server

This app is also hosted live on Heroku at https://powerful-earth-36700.herokuapp.com/

### Technologies used for the back-end development of this app include:

-Node

-Express

-PostgreSQL

-Knex

-PusherSwift

-Postman

-Heroku

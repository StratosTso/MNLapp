# Create Node.JS / MongoDB / Leaflet web app

## Basic installations
- install Node.js (which includes npm package manager)
- install express generator
```
sudo npm install express-generator -g
```
- start project in folder. Initialize using express
```
express --view=pug leaflet_map
```
- open the packages.json and add leaflet package
- run npm install
- npm start for testing purposes
- the webpage is available at **http://localhost:3000/**

## Back-end preps
- install MongoDB: https://docs.mongodb.com/v3.2/administration/install-community/
- test mongodb: open terminal (for MAC users)
```
mongo
> show dbs
```
- add mongodb & mongoose in package.json
- run npm install
- create the config folder in the structure
- add the connection.js file
- go to app.js and add the require --> connection
- run npm start. If you get the message "MongoDB connected" you are allready connected to DB!!!

## Data model preps
- create folder models
- create the model of the data you are going to use

## Add data to the database
- store the spoorwagenstation.json file in the folder
- in order to import the data we will use the mongoimport command
- open the terminal navigate to the folder and type:
```
mongoimport --host localhost:27017 --db myDB  --type JSON --file spoorwagenstation.json
```
- in order for this to work the install has to be the default (localhost:27017 and no security enabled in the mongodb)
- please note that in order to be able to read the data there are some rules:
  - data have to be valid GeoJSON. Check below:
    - https://en.wikipedia.org/wiki/GeoJSON
    - http://geojson.org/
  - the model has to match the data that we are trying to pull
  - the connection has to point exactly were the data are saved
- in any case, we will get the error in the server console if something is incorrect

## Middleware preps
index.js
- open the routes/index.js file
- add the require of the model just created
- add the router GET call

layout.jade
- open the views/layout.pug file
- add the jquerry script on the head section

index.jade
- in order to be able to add our JS content add the script(type='text/javascript').
- add the getJSON function. This will do the followings:
  - call the /maplayers which is part of the GET method
  - convert the data using JQuery / Ajax
  - print the data to the browser's log
- If everything goes as planned you should have the getJSON on the log of the browser

## Front end configuration
style.css
- add the html,body, #map
- copy the font property into the #map
- delete the single body style

leaflet.js
- navigate to node_modules/leaflet/dist and copy the leaflet.js
- navigate to public/javascript and paste the file
- open the layout.jade and add the script source in the head

leaflet.css
- navigate to node_modules/leaflet/dist and copy the leaflet.css
- navigate to public/stylesheets and paste the file
- open the layout.jade and add the link source in the head

images
- navigate to node_modules/leaflet/dist and copy the images folder
- navigate to public/stylesheets and paste the file

index.jade
- since we want to view just the map remove the h1 and the p lines
- add the #map before defining the script
- define the map component and add the basemap
```
var map = L.map('map').setView([52.07,  5.37], 8);
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'});
osm.addTo(map);
```
- run npm start in order to see the map for the first time!

## Map configuration
- Initialize the station layer
```
var StationsLayer = L.geoJson(null, {});
```
- inside the getJSON, remove the console.log command
- add the data to the station layer
- bellow the getJSON add the layer to the map

**You are ready!**
- in case the server still runs refresh the webpage and you will see the map
- otherwise npm start and navigate to the webpage!

# Stelsey

Quick Notes:
To start webpack-dev: dev server = npm run start:dev
To start app with nodemon: nodemon app
Webpack recompile: npx webpack --config webpack.config.js

http://openwathermap.org
API key: fabc23275fd1777eeacfe4cd4a7e0047

How to use API key in API call
Description:
To get access to weather API you need an API key whatever account you chose from Free to Enterprise.

API call:
http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
Parameters:
APPID {APIKEY} is your unique API key
Example of API call:
api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111

My call:

api.openweathermap.org/data/2.5/weather?lat=47.98&lon=-122.2&appid=fabc23275fd1777eeacfe4cd4a7e0047

This is the readme for my development project to learn the following technologies:
-Js (Vanilla)
-Node
-Express
-Reactjs
-Webpack (w/Babel)
-Html/css
-Bootstrap css framework
-Ajax requests (w/Fetch)

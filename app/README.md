# VR File system

Author: Michael Moran

Be advised this application is not finished yet
===============================================

## The files

Included is the following

 - README.md
 - index.html
 - node.js
 - favicon.ico

The application is the index.html file.
It however due to the design of the included libraries, 
will fail in some cases when run locally.
Due to this a helpful script `node.js' is provided.
If you exicute this from a fileserver node.js is not requred.

## Running with NodeJS

To run the node service insure you have node installed.
Check https://nodejs.org for instalation information.
Once node is installed running the server shoud be as simple as the following command.

    node node.js

The file instructs a socket to be opened at http://127.0.0.1:3000/

Should this socket already be in use feel free to modify the address,
This server script was not designed for anything but this application
and should not be provided an ip opened to the internet.

## Using the application

Once the application is running on a server opening the url in a vr supported browser

see https://aframe.io/docs/0.9.0/introduction/vr-headsets-and-webvr-browsers.html for supported browsers

the application prompts the user with an empty html page short a(few) button(s).

<!--TODO further instructions on update-->

Clicking the Start button launches the a-frame application.

A prompt loading screen clears way for a scene.

If the VR headset is set up clicking the googles icon in the bottom right corner should connect the application.

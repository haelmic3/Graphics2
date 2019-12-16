# VR File system

Author: Michael Moran

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
and should not be provided an ip opened to the the world wide web.

## Using the application

Once the application is running on a server opening the url in a vr supported browser

see https://aframe.io/docs/0.9.0/introduction/vr-headsets-and-webvr-browsers.html for supported browsers

the application prompts the user with an empty html page short a(few) button(s).

<!--TODO further instructions on update-->

Clicking the Start button launches the a-frame application.

A prompt loading screen clears way for a scene.

If the VR headset is set up clicking the googles icon in the bottom right corner should connect the application.

### Camera controls

Onboard headset tracking **should** work automaticaly.  
In addition wasd will control camera movement along the x and z axis,
shift and space will control camera movement along the y axis.
Click and draging the mouse pan left right and up down.
There is no current z tilt adjustment or calibration apart from any input the headset may provide.
With this it's somewhat posible to navagate with and without a headset.


# Declearation of sources and methods

 favicon.ico
 Entirely my own and no help other then the program it was created with licensed in a way no credit other than anything embeded in the file which to my knowlege no such branding is present.
 
	file.manager.js
 Written by me with no other asstance other then the documentation from http://developer.mozilla.org
 
	file.worker.js 
 Written by me with no other asstance other then the documentation from http://developer.mozilla.org
 
	index.html
Written by me linking to a library provided by https://aframe.io/

Documentation I used to write the application can be found at https://aframe.io/docs/0.9.0/

node.js
Written by me with documentation assistance from https://nodejs.org/ no other sources used.

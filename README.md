# video-stream-app
This is a video streaming app created using React and OBS Studio.
While the app allows a user to stream live video sreamed using OBS studio, the main focus is on React functionalities.

The following functionalities are enabled using Stream Client:

1. Stream Creation
2. Stream Edition
3. Stream Deletion
4. Stream List View
5. Stream a video

We rely on REST Convention for achieveing the above functionalities. Along with React, the application implements Redux, actions and reducers for core functionalities. The concept of Portals in React has been utilised to create a Modal view in Stream Deletion.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Scripts for running the application

### stream-client

npm start runs the server on port 3000. 

### stream-server

npm start runs the server on port 3001 .

The stream server utilises db.json file for storing and retrieving information. This could later be replaced with actual database connection.

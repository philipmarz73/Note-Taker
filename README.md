# Note Taker

This Project called for the creation of a simple, but fully-functional Note Taker application. It should easily allow the User to create and save notes, so that they can be viewed at a later time, and deleted when no longer required. It required practice in creating files that allowed for data persistence via a 'db.json' file using the 'fs' module.


## Requirements

The application front end was supplied for this exercise; we were to create the back end and link the two for full functionality. Two HTML routes had to be created: GET/notes, which returned the notes.tml file; and GET* which returns the index.html file. The API routes to be created are: 1) GET/api/notes - reads the db.json file and returns all saved notes as JSON 2) POST/api/notes - receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client 3)DELETE/api/notes/:id - receives a query parameter containing the id of a note to delete. This requires giving each note a unique ID when saved. To delete, all notes are read from the db.json file, the one with the given id is removed, and the remaining notes are rewritten to the db.json file. The application had to be deployed and fully functional on Heroku, since full deployment of server side code is not possible on GitHub.


## Acknowledgement

I especially want to thank Kris Renaldi, my tutor, who was instrumental in helping me get my API routes working and showing me how to deploy on Heroku, and Steven Mccarther, who worked with me closely on this project.


## License

&copy;MIT






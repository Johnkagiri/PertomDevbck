# ToDoLIST

This is a Node.js web application that
interacts with a MySQL database to manage a simple todo list. The application should have the
following functionalities:

1. Ability to add a new todo item to the database.
2. Retrieve and display all todo items from the database.
3. Mark a todo item as completed.
4. Delete a todo item.

# Solution

1. Design the database schema for the todo items.
   CREATE TABLE todos (
   id INT AUTO_INCREMENT PRIMARY KEY,
   task VARCHAR(255) NOT NULL,
   completed BOOLEAN NOT NULL DEFAULT false
   );

2. Set up a Node.js application with the necessary dependencies.
3. Implement CRUD operations (Create, Read, Update, Delete) for managing todo items in the database.
4. Handle proper error handling and asynchronous programming techniques.

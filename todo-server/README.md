App Link: "https://todo-appliction-claw.onrender.com"

API Link: "https://todo-appliction-claw-server.onrender.com"


# Todo Server

Created a simple To-Do APIS that allows users to manage their to-do items. This APIS I use Node.js, and Sqlite at backend. Deploy the backend using Render.

Given an `index.js` file and a database file `todo.db` consisting of two tables `user`, and `${username}`.



**Todo**

| Column              | Type    |
| ------------------- | ------- |
| id       | TEXT |
| task  | TEXT |
| isCompleted  | BOOLEAN |


 ### API 1

 #### Path: `/todo/add/`

 #### Method: `POST`

- **Request**

```
Content-Type: application/json

{   
    "id":"3",
    "task": "night all",
    "isCompleted": "false"
}
```

- **Scenario 1**

  - **Description**:

    User enter text then data get cretead in ```username``` database

  - **Response**
    - **Status code**
      ```
      200
      ```
    - **Body**
      ```
      created
      ```


 ### API 2

 #### Path: `/todo/allTodos/`

 #### Method: `GET`

- **Request**


- **Scenario 1**

  - **Description**:

    User enter text then data get cretead in ```username``` database

  - **Response**
    - **Status code**
      ```
      200
      ```
    - **Body**
      ```
      [{   "id":"3", "task": "night all", "isCompleted": "false"}, ....]
      ```

 ### API 3

 #### Path: `/todo/update/:id`

 #### Method: `PUT`

- **Request**

```
Content-Type: application/json

{   
    "task": "good night all",
    "isCompleted": "true"
}

```

- **Scenario 1**

  - **Description**:

    User pass the object of ```task``` and ```isCompleted``` 

  - **Response**
    - **Status code**
      ```
      200
      ```
    - **Body**
      ```
      Todo Updated Successfully
      ```


 ### API 4

 #### Path: `/todo/delete/:id/`

 #### Method: `DELETE`

- **Request**


- **Scenario 1**

  - **Description**:

    Delete the ```Todo``` 

  - **Response**
    - **Status code**
      ```
      200
      ```
    - **Body**
      ```
      deleted Succfully
      ```


# Todo App


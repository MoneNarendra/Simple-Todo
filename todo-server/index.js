const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
// const bcrypt = require("bcrypt");
const cors = require("cors");
// const jwt = require("jsonwebtoken");

const dbpath = path.join(__dirname, "todo.db");
const app = express();

app.use(express.json());
app.use(cors());

let db = null;
const PORT = 3000 ;

const initilaizeDbAndServer = async () => {
  try {
    (db = await open({
      filename: dbpath,
      driver: sqlite3.Database,
    })),
      app.listen(PORT, () => {
        console.log("Server Started...");
      });
  } catch (e) {
    console.log(`Error db: ${e.message}`);
    process.exit(1);
  }
};

initilaizeDbAndServer();

// Add Todo

app.post("/todo/add/", async (request, response) => {
  const { id, task, isCompleted } = request.body;
  const addTodoQuery = `
    INSERT INTO
      TODO (id, task, isCompleted)
    VALUES
      (
        '${id}',
        '${task}',
         ${isCompleted}
      );`;

  const dbResponse = await db.run(addTodoQuery);
  response.send(JSON.stringify("created"));
});

//All todos

app.get("/todo/allTodos/", async (request, response) => {
  const getTodosQuery = `SELECT * FROM TODO`;
  const allTodos = await db.all(getTodosQuery);
  response.send(allTodos);
});

//Delete todos

app.delete("/todo/delete/:id/", async (request, response) => {
  const { id } = request.params;
  const deleteTodoQuery = `
    DELETE FROM
      TODO
    WHERE
      id = '${id}';`;
  await db.run(deleteTodoQuery);
  response.send(JSON.stringify("Todo Deleted Successfully"));
});

// Upadate Todo

app.put("/todo/update/:id", async (request, response) => {
  const { id } = request.params;
  const bookDetails = request.body;
  const { task, isCompleted } = bookDetails;
  const updateTodoQuery = `
    UPDATE
       TODO
    SET
        task='${task}',
        isCompleted = ${isCompleted}  
    WHERE
      id = '${id}';`;
  await db.run(updateTodoQuery);
  response.send(JSON.stringify("Todo Updated Successfully"));
});



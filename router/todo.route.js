const Todo = require("../controllers/todo.controller")

const route = require("express").Router()

route
    .get("/getTodo", Todo.getTodo)
    .post("/addTodo", Todo.addTodo)
    .patch("/updateTodo/:tid", Todo.updateTodo)
    .delete("/deleteTodo/:tid", Todo.deleteTodo)

module.exports = route
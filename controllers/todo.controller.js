const Todo = require("../models/Todo");


exports.addTodo = async (req, res) => {
    try {
        await Todo.create(req.body)
        res.json({ message: "todo create success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to addtodo", error: error.message })
    }
}
exports.getTodo = async (req, res) => {
    try {
        const result = await Todo.find()
        res.json({ message: "todo find success", result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to gettodo", error: error.message })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        const { tid } = req.params
        await Todo.findByIdAndUpdate(req.params.tid, req.body)
        res.json({ message: "todo update success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to updatetodo", error: error.message })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        const { tid } = req.params
        await Todo.findByIdAndDelete(tid)
        res.json({ message: "todo delete success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to deletetodo", error: error.message })
    }
}
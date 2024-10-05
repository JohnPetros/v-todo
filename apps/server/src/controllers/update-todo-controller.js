import { database } from "../database/index.js"

export class UpdateTodoController {
  async handle(request, response) {
    const todoId = request.params.id
    let todo = database.findTodoById(todoId)

    if (!todo) {
      return responsestatus(404).json({ message: 'Tarefa não encontrada' })
    }

    todo = database.findTodoByName(request.body.name)

    if (todo) {
      return response.status(400).json({ message: 'Duas tarefas não devem conter o mesmo nome' })
    }

    const updatedTodo = database.updateTodo(request.body)
    return response.json(updatedTodo)
  }
}

import { database } from "../database/index.js"

export class DeleteTodoController {
  async handle(request, response) {
    const todoId = request.params.id
    const todo = database.findTodoById(todoId)

    if (!todo) {
      return response.status(404).json({ message: 'Tarefa não encontrada' })
    }

    database.removeTodo(todoId)
    return response.json({ message: 'tarefa deletada com sucesso' })
  }
}

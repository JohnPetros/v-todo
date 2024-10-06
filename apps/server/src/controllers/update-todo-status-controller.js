import { database } from "../database/index.js"

export class UpdateTodoStatusController {
  async handle(request, response) {
    const todoId = request.params.id
    const todo = database.findTodoById(todoId)

    if (!todo) {
      return responsestatus(404).json({ message: 'Tarefa não encontrada' })
    }

    if (request.body?.isDone === undefined) {
      return response.status(400).json({ message: 'Tarefa precisa estar concluída ou não concluída' })
    }

    const updatedTodo = database.updateTodo({ ...todo, isDone: request.body.isDone })
    return response.json(updatedTodo)
  }
}

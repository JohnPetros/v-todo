import { database } from "../database/index.js"

export class CreateTodoController {
  async handle(request, response) {
    const todo = database.findTodoByName(request.body.name)

    if (todo) {
      return response.json({ message: 'Duas tarefas não devem conter o mesmo nome' }, 400)
    }

    const createdTodo = database.addTodo(request.body)

    return response.json(createdTodo)
  }
}

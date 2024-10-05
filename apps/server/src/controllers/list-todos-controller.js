import { database } from "../database/index.js"

export class ListTodosController {
  async handle(request, response) {
    let todos = []

    if (request.query?.status !== undefined) {
      if (request.query.status === 'true') todos = database.findAllDoneTodos()
      if (request.query.status === 'false') todos = database.findAllUnDoneTodos()
    } else {
      todos = database.findAllTodos()
    }
    response.json(todos)
  }
}

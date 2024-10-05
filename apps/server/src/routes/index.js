import { Router } from 'express'

import {
  CreateTodoController,
  ListTodosController,
  UpdateTodoController,
  DeleteTodoController
} from '../controllers/index.js'

export const routes = Router()

const listTodosController = new ListTodosController()
const createTodoController = new CreateTodoController()
const updateTodoController = new UpdateTodoController()
const deleteTodoController = new DeleteTodoController()

routes.get('/tarefas', listTodosController.handle)
routes.post('/tarefas', createTodoController.handle)
routes.put('/tarefas/:id', updateTodoController.handle)
routes.delete('/tarefas/:id', deleteTodoController.handle)
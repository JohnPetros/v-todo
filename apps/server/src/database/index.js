export class Database {
  currentTodoId = 1
  todos = []

  findAllTodos() {
    return this.todos
  }

  findAllDoneTodos() {
    return this.todos.filter((todo) => todo.isDone)
  }

  findAllUnDoneTodos() {
    return this.todos.filter((todo) => !todo.isDone)
  }

  findTodoById(todoId) {
    return this.todos.find((todo) => todo.id === Number(todoId))
  }

  findTodoByName(todoName) {
    return this.todos.find((todo) => todo.name === todoName)
  }

  addTodo(todo) {
    this.todos.push({ id: this.currentTodoId, ...todo })
    this.currentTodoId++
    return this.findTodoById(this.currentTodoId - 1)
  }

  updateTodo(todo) {
    this.todos = this.todos.map((currentTodo) =>
      currentTodo.id === Number(todo.id) ? todo : currentTodo,
    )
    return todo
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== Number(todoId))
  }
}


const database = new Database()

database.addTodo({ name: 'Estudar desenvolvimento bbbb', isDone: false })
database.addTodo({ name: 'Fazer exercício', isDone: false })
database.addTodo({ name: 'Revisar backlog', isDone: false })

export { database }
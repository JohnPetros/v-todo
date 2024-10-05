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
    console.log(this.todos.filter((todo) => !todo.isDone))
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
    this.todos = this.todos.filter((currentTodo) =>
      currentTodo.id === todo.id ? todo : currentTodo,
    )
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== Number(todoId))
  }
}

export const database = new Database() 
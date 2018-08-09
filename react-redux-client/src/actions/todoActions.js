const apiUrl = "/api/";
export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_TODO'
  }
}
export const addNewTodo = (todo) => {
}
export const deleteTodo = (todo) => {
}
export const editTodo = (todo) => {
}
//Async action
export const fetchTodos = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {
dispatch(fetchTodosRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchTodosSuccess(data.todos,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchTodosFailed(error));
                    })
                  }
                })
}
}
export const fetchTodosRequest = () => {
  return {
    type:'FETCH_TODOS_REQUEST'
  }
}
//Sync action
export const fetchTodosSuccess = (todos,message) => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos: todos,
    message: message,
    receivedAt: Date.now
  }
}
export const fetchTodosFailed = (error) => {
  return {
    type:'FETCH_TODOS_FAILED',
    error
  }
}
export const fetchTodoById = (todoId) => {
  return (dispatch) => {
    dispatch(fetchTodoRequest());
      // Returns a promise
      return fetch(apiUrl + todoId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchTodoSuccess(data.todo[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchTodoFailed(error));
                 })
               }
             })
}
}
export const fetchTodoRequest = () => {
  return {
    type:'FETCH_TODO_REQUEST'
  }
}
//Sync action
export const fetchTodoSuccess = (todo,message) => {
  return {
    type: 'FETCH_TODO_SUCCESS',
    todo: todo,
    message: message,
    receivedAt: Date.now
  }
}
export const fetchTodoFailed = (error) => {
  return {
    type:'FETCH_TODO_FAILED',
    error
  }
}
const INITIAL_STATE = {
    todos:[],
    todo:null,
    isFetching: false,
    error: null,
    successMsg:null,
    showDeleteModal: false,
    todoToDelete: null,
    showEditModal: false,
    todoToEdit: null,
  }
  export  const todoReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
            return {
              ...currentState,
              todos:[],
              todo:null,
              isFetching: true,
              error: null,
              successMsg:null,
              showDeleteModal: false,
              todoToDelete: null,
              showEditModal: false,
              todoToEdit: null,
            }
  case 'FETCH_TODOS_SUCCESS':
            return {
              ...currentState,
              todos:action.todos,
              todo:null,
              isFetching: false,
              error: null,
              successMsg:action.message,
              showDeleteModal: false,
              todoToDelete: null,
              showEditModal: false,
              todoToEdit: null,
            }
  case 'FETCH_TODOS_FAILED':
            return {
              ...currentState,
              todos:[],
              todo:null,
              isFetching: false,
              error: action.error,
              successMsg:null,
              showDeleteModal: false,
              todoToDelete: null,
              showEditModal: false,
              todoToEdit: null,
            }
  case 'FETCH_TODO_REQUEST':
            return {
              ...currentState,
              todos:currentState.todos,
              todo:null,
              isFetching: true,
              error: null,
              successMsg:null,
              showDeleteModal: false,
              todoToDelete: null,
              showEditModal: false,
              todoToEdit: null,
            }
  case 'FETCH_TODO_SUCCESS':
            return {
              ...currentState,
              todos:currentState.todos,
              todo:action.todo,
              isFetching: false,
              error: null,
              successMsg:action.message,
              showDeleteModal: false,
              todoToDelete: null,
              showEditModal: false,
              todoToEdit: null,
            }
  case 'FETCH_TODO_FAILED':
            return {
              ...currentState,
              todos:[],
              todo:null,
              isFetching: false,
              error: action.error,
              successMsg:null,
              showDeleteModal: false,
              todoToDelete: null,
              showEditModal: false,
              todoToEdit: null,
            }
  default:
         return currentState;
  }
  }
  
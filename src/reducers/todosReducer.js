import { v4 as uuidv4 } from 'uuid';

export default function todosReducer(currentTodos, action) {
  switch (action.type) {
    case 'add': {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.title,
        details: '',
        isCompleted: false,
      };
      const updatedTodos = [...currentTodos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case 'delete': {
      const updatedTodos = currentTodos.filter(
        (t) => t.id !== action.payload.id
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case 'edit': {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            title: action.payload.title,
            details: action.payload.details,
          };
        }
        return t;
      });
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case 'get': {
      const storgeTodos = JSON.parse(localStorage.getItem('todos')) || [];
      return storgeTodos;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

import React, { useReducer } from 'react';

import './App.css';
import Lists from './components/Lists';

// const Box: React.FunctionComponent<{ title: string }> = ({ title }) => {
//   return <div></div>;
// };

interface Todo {
  id: number,
  text: string
}

type ActionType = {type: "ADD", text: string} | {type: "REMOVE", id: number}

function App() {

  /*----------------------- 
  ------  useReducer  ----- 
  -------------------------*/
  function reducer(state: Todo[], action: ActionType) {
    switch(action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text
          }
        ]
      case "REMOVE":
        // destructuring the id
        return state.filter(({id}) => id !== action.id)
    }
  }
  const initialTodos = [
    {
      text: "Namaz",
      id: 0
    },
    {
      text: "Coding for 1 Hour",
      id: 1
    }
  ]
  const  [todos, dispatch] = useReducer(reducer, initialTodos)
  const addTodo = (event: any) => {
    event.preventDefault()
    const my_todo = event.target.todo.value
    if (my_todo === "") {
      return
    }
    console.log(my_todo)
    dispatch({type: "ADD", text: event.target.todo.value})
    event.target.reset()
  }
  const delTodo = (id: number) => {
    dispatch({type: "REMOVE", id: id})
  }
  return (
    <div className="App">
      {/* <Lists></Lists> */}
      {/* <Box title={"YoYoYo"}></Box> */}
      {
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.text} <button onClick={() => delTodo(todo.id)}>X</button>
          </div>
        ))
      }
      <form onSubmit={e=>addTodo(e)}>
        <input type="text" name="" id="todo" />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}

export default App;

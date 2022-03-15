import { disconnect } from 'process';
import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';

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

  const [myState, setMyState] = useState<string>("Name");
  
  useEffect(() => {

  })

  /*----------------------- 
  ------  useReducer  ----- 
  -------------------------*/
  // Work similar like useState

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

  // const addTodo = (event: any) => {
  //   event.preventDefault()
  //   const my_todo = event.target.todo.value
  //   if (my_todo === "") {
  //     return
  //   }
  //   console.log(my_todo)
  //   dispatch({type: "ADD", text: event.target.todo.value})
  //   event.target.reset()
  // }
  
  // const delTodo = (id: number) => {
  //   dispatch({type: "REMOVE", id: id})
  // }

  /*----------------------- 
  ------  useRef ----- 
  -------------------------*/
  const newTodoRef = useRef<HTMLInputElement>(null);



  /*----------------------- 
  ------  useCallback  ----- 
  -------------------------*/
  // Work similar like useEffect

  const onAddTodo = useCallback(()=>{
    if(newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value
      })
      newTodoRef.current.value = "";
    }
  }, [])
  return (
    <div className="App">
      {/* <Lists></Lists> */}
      {/* <Box title={"YoYoYo"}></Box> */}
      <input type="text" ref={newTodoRef} />
      <button onClick={onAddTodo}>Add</button>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.text} <button onClick={() => dispatch({type: "REMOVE", id: todo.id})}>X</button>
          </div>
        ))
      }
      {/* <form onSubmit={e=>addTodo(e)}>
        <input type="text" name="" id="todo" />
        <input type="submit" value="ADD" />
      </form> */}
    </div>
  );
}

export default App;

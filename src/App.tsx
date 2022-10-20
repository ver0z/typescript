import React, { useState } from "react";

import "./App.css";
import InputField from "./Components/InputField";
import TodoList from "./Components/TodoList";
import { Todo } from "./model";

let age: number;
let iStudent: boolean;
let hobies: string[];
let role: [number, string];

function printName(name: string) {
  console.log(name);
}

printName("pi");

const logOut = (nome: any) => {
  console.log(nome);
};

logOut("log");

type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: "Pius",
  age: 2,
};

export interface IState {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Tarefas</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/> 

    </div>
  );
};

export default App;

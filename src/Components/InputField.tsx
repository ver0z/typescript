import React, { useRef } from "react";
import "./styles.css";
import { IState as IProps } from "../App";

interface Props {
  todo: IProps["todo"];
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Adicione uma tarefa"
        className="input-box"
      />
      <button className="input-btn" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;

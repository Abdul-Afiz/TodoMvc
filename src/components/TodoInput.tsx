import styled from "styled-components";
import { addTodo } from "../store/todos.entity";

const StyledInput = styled.div`
  width: 95%;
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 0.8rem;
    color: #4d4d4d;
    ::placeholder {
      color: lightgray;
      font-style: italic;
    }
  }
`;

const TodoInput = () => {
  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.key;
    if (value === "Enter") {
      let txt = e.currentTarget.value;
      if (!txt) return;
      addTodo(txt);
      e.currentTarget.value = "";
    }
  };

  return (
    <StyledInput>
      <input
        type="text"
        onKeyPress={handleAddTodo}
        placeholder="What needs to be done?"
      />
    </StyledInput>
  );
};

export default TodoInput;

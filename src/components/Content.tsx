import styled from "styled-components";
import { todoEntity, toggleTodo } from "../store/todos.entity";
import RemoveCaret from "./vectors/RemoveCaret";
import TickCaret from "./vectors/TickCaret";
import { removeTodo } from "../store/todos.entity";
import Apptheme from "../styles/Apptheme";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.5fr 0.12fr;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  padding: 0 0.7rem;

  span {
    margin-left: 0.3rem;
    border: 1px solid lightgray;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
`;

const TodoText = styled.p<{ comp: string }>`
  font-size: ${(props) => Apptheme.styles["fontsize-1"]};
  color: ${(props) => Apptheme.colors.color1};
  text-decoration: ${({ comp }) =>
    comp === "completed" ? "line-through" : null};
`;

const Content = () => {
  const todos = todoEntity.use();

  return (
    <div>
      {todos.map((todo) => {
        return (
          <ContentWrapper key={todo.id}>
            <span onClick={() => toggleTodo(todo.id)}>
              <TickCaret view={todo.completed ? "visible" : ""} />
            </span>
            <TodoText comp={todo.completed ? "completed" : ""}>
              {todo.todo}
            </TodoText>
            <RemoveCaret onClick={() => removeTodo(todo.id)} />
          </ContentWrapper>
        );
      })}
    </div>
  );
};

export default Content;

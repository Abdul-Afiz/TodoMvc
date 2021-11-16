import styled from "styled-components";
import { todoEntity } from "../store/todos.entity";
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

const TodoText = styled.p`
  font-size: ${(props) => Apptheme.styles["fontsize-1"]};
  color: ${(props) => Apptheme.colors.color1};
`;

const Content = () => {
  const todos = todoEntity.use();
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <ContentWrapper key={todo.id}>
            <span>
              <TickCaret view="null" />
            </span>
            <TodoText>{todo.todo}</TodoText>
            <RemoveCaret onClick={() => removeTodo(todo.id)} />
          </ContentWrapper>
        );
      })}
    </div>
  );
};

export default Content;

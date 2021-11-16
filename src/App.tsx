import styled from "styled-components";
import Content from "./components/Content";
import TodoInput from "./components/TodoInput";
import CaretDown from "./components/vectors/CaretDown";
import { todoEntity } from "./store/todos.entity";

const StyledApp = styled.div`
  h1 {
    text-align: center;
    font-size: 100px;
    font-weight: 400;
    color: rgba(175, 47, 47, 0.15);
    margin-bottom: 0;
  }
`;

const StyledWrapper = styled.div`
  width: 35rem;
  margin: 0 auto;
  background-color: white;
  box-shadow: 1px 7px 20px 2px #d3d3d37a;
`;

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  border-bottom: 1.5px solid #e6dfdfb2;
`;

function App() {
  const todos = todoEntity.use();

  return (
    <StyledApp>
      <h1>todos</h1>
      <StyledWrapper>
        <Wrapper>
          <CaretDown visible={todos.length !== 0 ? "visible" : ""} />
          <TodoInput />
        </Wrapper>
        <Content />
      </StyledWrapper>
    </StyledApp>
  );
}

export default App;

import styled from "styled-components";

const Styledsvg = styled.svg<{ hidden: string }>`
  width: 2rem;
  stroke: #13b113;
  visibility: ${({ hidden }) => (hidden === "visible" ? "visible" : "hidden")};
`;

const TickCaret = ({ ...props }) => {
  return (
    <Styledsvg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      hidden={props.view}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </Styledsvg>
  );
};

export default TickCaret;

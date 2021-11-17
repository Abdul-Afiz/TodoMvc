import { SVGProps } from "react";
import styled from "styled-components";

const StyledCaret = styled.svg<{ visible: String }>`
  width: 2rem;
  height: 2rem;
  stroke: lightgrey;
  margin: 0 1rem;
  visibility: ${({ visible }) => (visible ? null : "hidden")};
`;

// type svgProp = {
//   props?: SVGProps<SVGSVGElement>;
//   visible: String;
// };

const CaretDown = ({ ...props }) => {
  return (
    <StyledCaret
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      visible={props.visible}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </StyledCaret>
  );
};

export default CaretDown;

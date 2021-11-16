import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 1.5rem;
  stroke: red;
  cursor: pointer;
`;

const RemoveCaret = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </StyledSvg>
  );
};

export default RemoveCaret;

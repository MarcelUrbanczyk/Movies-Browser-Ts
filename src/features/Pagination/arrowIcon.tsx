import * as React from "react";
import { SVGProps } from "react";
import { styled, css } from "styled-components";

interface ArrowProps extends SVGProps<SVGSVGElement> {
  $flipped?: boolean;
  $disabled?: boolean;
}

const Svg = styled.svg<ArrowProps>`
  color: ${({ theme }) => theme.pagination.arrowActive};
  height: 11px;
  width: 7px;
  ${({ $flipped }) =>
    $flipped &&
    css`
      transform: rotate(180deg);
    `}
  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => theme.pagination.arrowDisabled};
    `}
`;

const Arrow = (props: ArrowProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M.312 5.303A.949.949 0 0 0 0 6c0 .261.112.512.312.697l4.895 4.524c.198.18.465.28.743.279a1.1 1.1 0 0 0 .741-.286A.94.94 0 0 0 7 10.53a.938.938 0 0 0-.302-.688L2.542 6l4.156-3.842A.938.938 0 0 0 7 1.47a.94.94 0 0 0-.309-.684A1.1 1.1 0 0 0 5.951.5a1.102 1.102 0 0 0-.744.279L.312 5.303Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Arrow;

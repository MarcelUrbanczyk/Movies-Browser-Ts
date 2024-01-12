import * as React from "react";
import { SVGProps } from "react";
import { styled } from "styled-components";

const Svg = styled.svg`
  width: 24px;
  height: 24px;
  margin: auto;
  @media (max-width: 655px) {
    height: 20px;
    width: 20px;
  }
  @media (max-width: 460px) {
    height: 16px;
    width: 16px;
    margin: 0;
  }
`;

const Loupe = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#7e839a"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="m508.255 490.146-128-128c-.06-.06-.137-.077-.196-.128 34.193-38.434 55.142-88.917 55.142-144.418 0-120.175-97.425-217.6-217.6-217.6S.001 97.425.001 217.6s97.425 217.6 217.6 217.6c55.501 0 105.975-20.949 144.418-55.151.06.06.077.137.128.196l128 128c2.5 2.509 5.777 3.755 9.054 3.755s6.554-1.246 9.054-3.746c4.992-5.001 4.992-13.107 0-18.108zM217.601 409.6c-105.865 0-192-86.135-192-192s86.135-192 192-192 192 86.135 192 192-86.135 192-192 192z" />
  </Svg>
);
export default Loupe;

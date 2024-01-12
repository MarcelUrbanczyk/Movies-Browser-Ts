import * as React from "react";
import { SVGProps } from "react";
const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        width="100%"
        fill="#FCD420"
        d="m23.145 8.541-7.08-1.029L12.9 1.1a1.04 1.04 0 0 0-1.794 0L7.938 7.512.858 8.541A1 1 0 0 0 .3 10.246l5.125 4.994-1.209 7.053a1 1 0 0 0 1.451 1.054l6.333-3.329 6.333 3.329a1 1 0 0 0 1.451-1.054l-1.209-7.053 5.125-4.994a1 1 0 0 0-.554-1.705h-.002Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Star;

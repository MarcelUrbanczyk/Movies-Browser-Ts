import * as React from "react";
import { SVGProps } from "react";
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m26.877 24.994 6.109 2.497a1.763 1.763 0 0 0 2.43-1.632V14.794a1.764 1.764 0 0 0-2.43-1.633l-6.109 2.496"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M10.507 31.901h10.448c3.64 0 5.924-2.371 5.924-5.73V14.48c0-3.359-2.274-5.73-5.924-5.73H10.507c-3.652 0-5.923 2.371-5.923 5.73V26.17c0 3.359 2.271 5.73 5.923 5.73Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Icon;

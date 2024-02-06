import { SVGProps } from "react";
const PersonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="70px"
    height="80px"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.5}
    >
      <circle cx={34.736} cy={21.834} r={14.334} />
      <path
        d="M12 56.104a6.647 6.647 0 0 1 .66-2.91c1.372-2.747 5.244-4.202 8.457-4.861a50.361 50.361 0 0 1 7.03-.989 75.176 75.176 0 0 1 13.153 0c2.363.166 4.712.496 7.03.989 3.212.659 7.084 1.977 8.457 4.86a6.81 6.81 0 0 1 0 5.85c-1.373 2.883-5.245 4.2-8.457 4.832a47.15 47.15 0 0 1-7.03 1.016c-3.562.302-7.14.357-10.71.165-.823 0-1.62 0-2.444-.165-2.356-.16-4.697-.499-7.002-1.016-3.24-.631-7.084-1.95-8.485-4.833A6.839 6.839 0 0 1 12 56.104Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default PersonIcon;

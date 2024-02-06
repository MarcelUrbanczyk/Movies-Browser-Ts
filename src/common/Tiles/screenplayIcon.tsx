import { SVGProps } from "react";
const ScreenplayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="48px"
    height="48px"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.686}
      opacity={0.5}
    >
      <path d="m32.253 30.493 7.33 2.996A2.115 2.115 0 0 0 42.5 31.53V18.253a2.117 2.117 0 0 0-2.916-1.96l-7.33 2.996" />
      <path
        d="M12.608 38.782h12.538c4.368 0 7.108-2.846 7.108-6.876v-14.03c0-4.03-2.728-6.876-7.108-6.876H12.608C8.226 11 5.5 13.846 5.5 17.876v14.03c0 4.03 2.726 6.876 7.108 6.876Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default ScreenplayIcon;

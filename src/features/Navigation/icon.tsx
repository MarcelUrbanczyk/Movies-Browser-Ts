import { SVGProps } from "react";
import { styled } from "styled-components";

const Svg = styled.svg`
  height: 40px;
  width: 40px;
  @media (max-width: 655px) {
    height: 35px;
    width: 35px;
  }
  @media (max-width: 460px) {
    height: 30px;
    width: 30px;
  }
`;

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#ffff"
      fillRule="evenodd"
      d="M7.8 5.25h-.032c-.813 0-1.469 0-2 .043-.546.045-1.026.14-1.47.366a3.75 3.75 0 0 0-1.64 1.639c-.226.444-.32.924-.365 1.47-.043.531-.043 1.187-.043 2v2.464c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h2.464c.813 0 1.469 0 2-.043.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.64-1.639c.226-.444.32-.924.365-1.47 0-.016.002-.031.003-.047.161.09.338.177.532.275l.08.04.029.014c.613.307 1.113.557 1.523.724.415.169.826.292 1.25.273a2.75 2.75 0 0 0 2.278-1.408c.206-.37.28-.793.314-1.24.034-.442.034-1 .034-1.686v-.353c0-.687 0-1.246-.034-1.687-.034-.447-.108-.87-.314-1.24a2.75 2.75 0 0 0-2.278-1.408c-.424-.02-.835.104-1.25.273-.41.168-.91.417-1.523.724l-.028.014-.08.04c-.195.097-.372.186-.533.275a6.229 6.229 0 0 0-.003-.046c-.045-.547-.14-1.027-.366-1.471a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365-.531-.043-1.187-.043-2-.043H10.2zm7.95 6.604v.292c0 .642.007.816.048.96.063.223.187.424.359.58.11.101.262.185.837.472.648.325 1.096.548 1.447.69.352.145.52.169.615.165a1.25 1.25 0 0 0 1.036-.64c.046-.084.1-.245.129-.624.028-.378.029-.878.029-1.603v-.292c0-.725 0-1.225-.03-1.603-.029-.38-.082-.54-.128-.624a1.25 1.25 0 0 0-1.036-.64c-.095-.004-.263.02-.615.164-.351.143-.799.367-1.447.69-.575.288-.727.372-.837.472a1.25 1.25 0 0 0-.36.582c-.04.143-.047.317-.047.96zm-1.5-.261V10.8c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207-.462-.037-1.056-.038-1.909-.038H7.8c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v2.4c0 .853 0 1.447.038 1.91.037.453.107.714.207.911.216.424.56.768.984.984.197.1.458.17.912.207.462.037 1.057.038 1.909.038h2.4c.853 0 1.447 0 1.91-.038.453-.037.714-.107.912-.207.423-.216.767-.56.983-.983.1-.198.17-.459.207-.913.037-.462.038-1.057.038-1.909V11.593z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Icon;

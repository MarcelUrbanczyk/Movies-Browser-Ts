import Main from "../../common/main";
import {
  ErrorHeader,
  ErrorIcon,
  ErrorMesssage,
  Wrapper,
  ButtonLink,
} from "./styled";
import errorIcon from "./errorIcon.png";
import { toHome } from "../../core/routes";

const Error = () => (
  <Main>
    <Wrapper>
      <ErrorIcon src={errorIcon} />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorMesssage>
        Please check your network connection and try again
      </ErrorMesssage>
      <ButtonLink to={toHome}>Back to home page</ButtonLink>
    </Wrapper>
  </Main>
);
export default Error;

import Main from "../../common/main";
import {
  ErrorHeader,
  ErrorIcon,
  ErrorMesssage,
  Wrapper,
  Button,
} from "./styled";
import errorIcon from "./errorIcon.png";

const Error = () => (
  <Main>
    <Wrapper>
      <ErrorIcon src={errorIcon} />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorMesssage>
        Please check your network connection and try again
      </ErrorMesssage>
      <Button>Back to home page</Button>
    </Wrapper>
  </Main>
);
export default Error;

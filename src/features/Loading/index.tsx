import Main from "../../common/main";
import { LoadingIcon, Wrapper } from "./styled";
import loadingIcon from "../../assets/loadingIcon.png";

const Loading = () => (
  <Main>
    <Wrapper>
      <LoadingIcon src={loadingIcon} />
    </Wrapper>
  </Main>
);

export default Loading;

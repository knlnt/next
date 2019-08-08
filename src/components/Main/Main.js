import styled from "styled-components";
import Container from "@material-ui/core/Container";

const StyledMain = styled(Container)`
  padding-top: 88px;
`;

const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

export default Main;

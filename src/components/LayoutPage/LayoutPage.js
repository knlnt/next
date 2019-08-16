import { Component } from "react";
import { Container } from "next/app";
import styled from "styled-components";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import { CssBaseline, Container as MUIContainer } from "@material-ui/core";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import theme from "../../theme";

const StyledContainer = styled(MUIContainer)`
  padding-top: 88px;
`;
const LayoutPage = (Content, getData) => {
  return class extends Component {
    state = {
      navigationIsOpen: false
    };

    render() {
      const { navigationIsOpen } = this.state;

      const { btnBackVisible } = getData;

      return (
        <Container>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Header
                onClick={this.handleOpenNavigation}
                btnBackVisible={btnBackVisible}
              />
              <Navigation
                isOpen={navigationIsOpen}
                onClick={this.handleCloseNavigation}
              />
              <StyledContainer>
                <Content />
              </StyledContainer>
            </ThemeProvider>
          </StylesProvider>
        </Container>
      );
    }
    handleOpenNavigation = () => {
      this.setState({
        navigationIsOpen: true
      });
    };
    handleCloseNavigation = () => {
      this.setState({
        navigationIsOpen: false
      });
    };
  };
};

export default LayoutPage;

import React from "react";
import App, { Container } from "next/app";
import styled from "styled-components";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { CssBaseline, Container as MUIContainer } from "@material-ui/core";

import Header from "../src/components/Header/Header";
import Navigation from "../src/components/Navigation/Navigation";
import theme from "../src/theme";

const StyledContainer = styled(MUIContainer)`
  padding-top: 88px;
`;

class MyApp extends App {
  state = {
    navigationIsOpen: false
  };
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { navigationIsOpen } = this.state;
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header onClick={this.handleOpenNavigation} />
          <Navigation
            isOpen={navigationIsOpen}
            onClick={this.handleCloseNavigation}
          />
          <StyledContainer>
            <Component {...pageProps} />
          </StyledContainer>
        </ThemeProvider>
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
}

export default MyApp;

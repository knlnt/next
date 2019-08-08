import React from "react";
import App, { Container } from "next/app";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../src/components/Header/Header";
import Navigation from "../src/components/Navigation/Navigation";
import Main from "../src/components/Main/Main";
import theme from "../src/theme";

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
          <Main>
            <Component {...pageProps} />
          </Main>
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

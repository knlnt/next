import React from "react";
import App from "next/app";

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;

// import React from "react";
// import App, { Container } from "next/app";
// import styled from "styled-components";
// import { ThemeProvider, StylesProvider } from "@material-ui/styles";
// import { CssBaseline, Container as MUIContainer } from "@material-ui/core";

// import Header from "../src/components/Header/Header";
// import Navigation from "../src/components/Navigation/Navigation";
// import theme from "../src/theme";

// const StyledContainer = styled(MUIContainer)`
//   padding-top: 88px;
// `;

// class MyApp extends App {
//   state = {
//     navigationIsOpen: false
//   };
//   componentDidMount() {
//     const jssStyles = document.querySelector("#jss-server-side");
//     if (jssStyles) {
//       jssStyles.parentNode.removeChild(jssStyles);
//     }
//   }

//   render() {
//     const { navigationIsOpen } = this.state;
//     const { Component, pageProps } = this.props;
//     console.dir(pageProps);
//     return (
//       <Container>
//         <StylesProvider injectFirst>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Header onClick={this.handleOpenNavigation} />
//             <Navigation
//               isOpen={navigationIsOpen}
//               onClick={this.handleCloseNavigation}
//             />
//             <StyledContainer>
//               <Component {...pageProps} />
//             </StyledContainer>
//           </ThemeProvider>
//         </StylesProvider>
//       </Container>
//     );
//   }
//   handleOpenNavigation = () => {
//     this.setState({
//       navigationIsOpen: true
//     });
//   };
//   handleCloseNavigation = () => {
//     this.setState({
//       navigationIsOpen: false
//     });
//   };
// }

// export default MyApp;

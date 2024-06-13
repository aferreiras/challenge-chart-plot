import React, { Component } from 'react'
import GlobalStyle from './GlobalStyles.ts'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Main
          offSetTop={0}
          offSetBottom={0}
          offSetLeft={0}
          offSetRight={0}
        />
      </>
    );
  }
} 

export default App

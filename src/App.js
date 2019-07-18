import React from "react";
import Search from "./Search";
import { Router } from "@reach/router";
import Details from "./Details";
import Results from "./Results";
import * as styled from "./styled";
import Emoji from "./Emoji";

function Header({ children }) {
  return (
    <styled.Header>
      <styled.Logo>
        <styled.H1>
          <Emoji label="Breweries" symbol="🍺" />
        </styled.H1>
      </styled.Logo>
      <styled.SectionWithMargin>{children}</styled.SectionWithMargin>
    </styled.Header>
  );
}

function App() {
  return (
    <styled.Container>
      <Header>
        <Search />
      </Header>
      <Router>
        <Results path="/" />
        <Details path=":itemId" />
      </Router>
    </styled.Container>
  );
}

export default App;

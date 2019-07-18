import React from "react";
import Search from "./Search";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import Results from "./Results";
import * as Styled from "./styled";
import Emoji from "./Emoji";

function Header({ children }) {
  return (
    <Styled.Header>
      <Styled.Logo>
        <Styled.H1>
          <Link to="/">
            <Emoji label="Breweries" symbol="🍺" />
          </Link>
        </Styled.H1>
      </Styled.Logo>
      <Styled.SectionWithMargin>{children}</Styled.SectionWithMargin>
    </Styled.Header>
  );
}

function App() {
  return (
    <Styled.Container>
      <Header>
        <Search />
      </Header>
      <Router>
        <Results path="/" />
        <Details path=":itemId" />
      </Router>
    </Styled.Container>
  );
}

export default App;

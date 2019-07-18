import React from "react";
import { Router, Link } from "@reach/router";

import Search from "./Search";
import Details from "./Details";
import Results from "./Results";
import * as Styled from "./styled";
import Emoji from "./Emoji";

function Header() {
  return (
    <Styled.Header>
      <Styled.Logo>
        <Styled.H1>
          <Link to="/">
            <Emoji label="Breweries" symbol="🍺" />
          </Link>
        </Styled.H1>
      </Styled.Logo>
      <Styled.SectionWithMargin>
        <Search />
      </Styled.SectionWithMargin>
    </Styled.Header>
  );
}

function App() {
  return (
    <Styled.Container>
      <Header />
      <Router>
        <Results path="/" />
        <Details path=":itemId" />
      </Router>
    </Styled.Container>
  );
}

export default App;

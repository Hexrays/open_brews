import React, { useState, useRef } from "react";
import { navigate } from "@reach/router";
import Autocomplete from "./Autocomplete";
import Emoji from "./Emoji";
import * as Styled from "./Search.style";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef();

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 300);
  };

  return (
    <Styled.Container isFocused={isFocused}>
      <Styled.Form
        onSubmit={e => {
          e.preventDefault();
          inputRef.current.blur();
          navigate(`/?query=${searchTerm}`);
        }}
      >
        <Styled.Input
          type="text"
          placeholder="Search for a brewery"
          autocomplete="off"
          title="Search"
          ref={inputRef}
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Styled.Button type="submit" active={searchTerm.length}>
          <Emoji label="search" symbol="🔍" />
        </Styled.Button>
      </Styled.Form>
      {isFocused && <Autocomplete query={searchTerm} />}
    </Styled.Container>
  );
}

export default Search;

import React, { useState, useRef } from "react";
import { navigate } from "@reach/router";
import Autocomplete from "./Autocomplete";
import Emoji from "./Emoji";
import * as styled from "./Search.style";

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
    <styled.Container isFocused={isFocused}>
      <styled.Form
        onSubmit={e => {
          e.preventDefault();
          inputRef.current.blur();
          navigate(`/?query=${searchTerm}`);
        }}
      >
        <styled.Input
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
        <styled.Button type="submit" active={searchTerm.length}>
          <Emoji label="search" symbol="🔍" />
        </styled.Button>
      </styled.Form>
      {isFocused && <Autocomplete query={searchTerm} />}
    </styled.Container>
  );
}

export default Search;

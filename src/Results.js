import React, { useEffect, useState, Fragment } from "react";
import queryString from "query-string";

import useDataApi from "./useDataApi";
import { BY_NAME_URL } from "./api";
import Loader from "./Loader";

import Address from "./Address";
import { SectionWithMargin } from "./styled";
import * as Styled from "./Results.style";

function Result({ result }) {
  return (
    <Styled.Result>
      <Styled.Link to={`/${result.id}`}>{result.name}</Styled.Link>
      <Styled.Type>Brewery Type: {result.brewery_type}</Styled.Type>
      <Address brewery={result} />
    </Styled.Result>
  );
}

function Results({ query }) {
  const [results, setUrl] = useDataApi(`${BY_NAME_URL}${query}`, {});

  useEffect(() => {
    if (query) {
      setUrl(`${BY_NAME_URL}${query}`);
    }
  }, [query, setUrl]);

  if (results.isLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      {results.data.map(result => (
        <Result key={result.id} result={result} />
      ))}
    </Fragment>
  );
}

function ResultsPage({ location: { search } }) {
  const [query, setQuery] = useState(queryString.parse(search).query);

  useEffect(() => {
    setQuery(queryString.parse(search).query);
  }, [search]);

  return (
    <SectionWithMargin>
      {query ? <Results query={query} /> : <h3>Search by brewery name.</h3>}
    </SectionWithMargin>
  );
}

export default ResultsPage;

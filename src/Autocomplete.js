import React, { useEffect, useMemo, Fragment } from "react";
import PropTypes from "prop-types";

import useDataApi from "./useDataApi";
import { AUTOCOMPLETE_URL } from "./api";
import * as Styled from "./Autocomplete.style";

function highlightFromQuery(text, query) {
  // Split text on query term, include term itself into parts, ignore case
  var parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <Fragment>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <b key={i}>{part}</b>
        ) : (
          part
        )
      )}
    </Fragment>
  );
}

function List({ data, query }) {
  const rows = useMemo(() => {
    return data.map(result => (
      <Styled.ListItem key={result.id}>
        <Styled.Link to={result.id}>
          {highlightFromQuery(result.name, query)}
        </Styled.Link>
      </Styled.ListItem>
    ));
  }, [data, query]);

  return data.length > 0 && <Styled.List>{rows}</Styled.List>;
}

function Autocomplete({ query }) {
  const [results, setUrl] = useDataApi(`${AUTOCOMPLETE_URL}${query}`, []);

  useEffect(() => {
    setUrl(`${AUTOCOMPLETE_URL}${query}`);
  }, [query, setUrl]);

  return (
    <Styled.Autocomplete>
      <List data={results.data} query={query} />
    </Styled.Autocomplete>
  );
}

export default Autocomplete;

Autocomplete.propTypes = {
  query: PropTypes.string
};

List.propTypes = {
  data: PropTypes.array,
  query: PropTypes.string
};

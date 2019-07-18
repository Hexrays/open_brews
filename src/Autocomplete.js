import React, { useEffect, useMemo, Fragment } from "react";

import useDataApi from "./useDataApi";
import { AUTOCOMPLETE_URL } from "./api";
import * as styled from "./Autocomplete.style";

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
      <styled.ListItem key={result.id}>
        <styled.Link to={result.id}>
          {highlightFromQuery(result.name, query)}
        </styled.Link>
      </styled.ListItem>
    ));
  }, [data, query]);

  return data.length > 0 && <styled.List>{rows}</styled.List>;
}

function Autocomplete({ query }) {
  const [results, setUrl] = useDataApi(`${AUTOCOMPLETE_URL}${query}`, []);

  useEffect(() => {
    setUrl(`${AUTOCOMPLETE_URL}${query}`);
  }, [query, setUrl]);

  return (
    <styled.Autocomplete>
      <List data={results.data} query={query} />
    </styled.Autocomplete>
  );
}

export default Autocomplete;

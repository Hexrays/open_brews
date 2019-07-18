import React, { useEffect } from "react";
import PropTypes from "prop-types";

import useDataApi from "./useDataApi";
import { BASE_URL } from "./api";
import Loader from "./Loader";
import { SectionWithMargin, ImageContainer } from "./styled";
import Address from "./Address";

function PlaceKitten({ width = 300, height = 300, alt, className }) {
  return (
    <img
      src={`http://placekitten.com/${width}/${height}`}
      className={className}
      alt={alt}
    />
  );
}

function Details({ itemId }) {
  const [result, setUrl] = useDataApi(`${BASE_URL}/${itemId}`, {});

  useEffect(() => {
    setUrl(`${BASE_URL}/${itemId}`);
  }, [itemId, setUrl]);

  if (result.isLoading) {
    return <Loader />;
  }
  const { data: brewery } = result;
  return (
    <SectionWithMargin>
      <h2>{brewery.name}</h2>
      <ImageContainer>
        <PlaceKitten
          width={parseInt(brewery.latitude || 0, 10) + 300}
          height={parseInt(brewery.longitude || 0, 10) + 300}
          alt={brewery.name}
        />
      </ImageContainer>
      <Address brewery={brewery}>
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </Address>
    </SectionWithMargin>
  );
}

export default Details;

Details.propTypes = {
  itemId: PropTypes.string
};

PlaceKitten.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string
};

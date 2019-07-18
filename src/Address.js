import React from "react";
import styled from "@emotion/styled";

const StyledAddress = styled.address`
  font-size: 14px;
`;

function Address({ brewery, children, className }) {
  return (
    brewery.street && (
      <StyledAddress className={className}>
        {brewery.street}
        <br />
        {brewery.city}, {brewery.state} {brewery.postal_code}
        <br />
        {children}
      </StyledAddress>
    )
  );
}

export default Address;

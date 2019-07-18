import styled from "@emotion/styled";
import { Link as L } from "@reach/router";

export const Result = styled.div`
  padding: 15px;
  border: 1px solid #aeaeae;
  border-radius: 8px;
  margin: 8px 0;
`;

export const Link = styled(L)`
  display: block;
  color: #444;
  text-decoration: none;
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 6px;
  &:hover {
    color: #666;
  }
`;

export const Type = styled.p`
  margin-top: 3px;
  margin-bottom: 6px;
  font-size: 14px;
`;

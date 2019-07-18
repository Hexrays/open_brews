import styled from "@emotion/styled";
import { Link as L } from "@reach/router";

export const List = styled.ul`
  list-style: none;
  padding: 0 0 2px 0;
  margin: 0;
`;

export const ListItem = styled.li`
  position: relative;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #f0f0f0;
  }
  &:after {
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 0;
    border-bottom: 1px solid #f0f0f0;
  }
  &:last-child {
    &:after {
      border-bottom: none;
    }
  }
`;

export const Link = styled(L)`
  display: block;
  text-decoration: none;
  padding: 8px 20px;
  color: #333;
`;

export const Autocomplete = styled.div`
  position: relative;
  width: 100%;
`;

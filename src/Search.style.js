import styled from "@emotion/styled";

const INPUT_HEIGHT = 36;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 12px;
  border-radius: ${INPUT_HEIGHT / 2}px;
  border: ${props =>
    props.isFocused ? "2px solid #a0a0a0" : "2px solid #f0f0f0"};
  overflow: hidden;
  background-color: #fff;
`;

export const Form = styled.form`
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
`;

export const Input = styled.input`
  width: calc(100% - ${INPUT_HEIGHT}px);
  padding: 0 15px;
  height: ${INPUT_HEIGHT}px;
  line-height: ${INPUT_HEIGHT}px;
  border: none;
  border-radius: ${INPUT_HEIGHT / 2}px;

  &:hover {
    border-color: #aeaeae;
  }
  &:focus {
    border-color: transparent;
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 2px;
  top: 2px;
  width: ${INPUT_HEIGHT - 4}px;
  height: ${INPUT_HEIGHT - 4}px;
  border-color: transparent;
  background-color: transparent;
  font-size: 16px;
  z-index: 10;
  border-radius: ${INPUT_HEIGHT}px;
  transition: all 300ms ease-in-out;
  opacity: ${props => (props.active ? 1 : 0)};
  transform-origin: center center;
  transform: ${props =>
    props.active ? "scale(1) rotate(0deg)" : "scale(0) rotate(360deg)"};

  &:hover {
    cursor: pointer;
  }
`;

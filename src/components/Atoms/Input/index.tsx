import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

interface InputProps {
  onEditComplete: (value: any) => void;
  defaultValue?: any;
} /*any型*/

const Input = ({ onEditComplete, defaultValue = "" }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onEditCompleteRef = useRef(onEditComplete);

  useEffect(() => {
    onEditCompleteRef.current = onEditComplete;
  }, [onEditComplete]);

  useEffect(() => {
    const currentInput = inputRef.current;
    if (currentInput) {
      currentInput.value = defaultValue;
      currentInput.focus();
      currentInput.onblur = () => {
        if (currentInput) {
          onEditCompleteRef.current(currentInput.value);
        }
      };
      currentInput.onkeydown = (event: KeyboardEvent) => {
        if (event.key === "Enter" && currentInput) {
          onEditCompleteRef.current(currentInput.value);
        }
      };
    }
  }, [defaultValue]);

  return <StyledInput ref={inputRef} />;
};
export default Input;

const StyledInput = styled.input`
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  border-radius: 2px;
  padding: 0 4px;
  border: none;
  outline: none;
  width: 100%;
`;

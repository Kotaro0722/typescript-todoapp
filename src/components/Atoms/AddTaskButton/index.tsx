import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={plus} />
      <StyledLabel>タスクを追加</StyledLabel>
    </StyledButton>
  );
};
export default AddTaskButton;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  background: ${COLOR.GREEN_TRANSPARENT};
  transition: 0.2s;
  display: flex;
  align-items: center;
  padding: 2px 6px;

  & > img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${COLOR.GREEN_TRANSLUCENT};
  }
`;

const StyledLabel = styled.div`
  color: ${COLOR.GREEN};
  ${TEXT.S};
  margin-left: 10px;
  white-space: nowrap;
`;

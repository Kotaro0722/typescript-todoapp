import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={pencil} />
    </StyledButton>
  );
};
export default EditButton;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  background: none;
  padding: 0;
  border-radius: 50%;
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  transition: 0.2s;

  & > img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;

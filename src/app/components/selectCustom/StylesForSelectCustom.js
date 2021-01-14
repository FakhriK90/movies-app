import styled from "styled-components";
import { colors } from '../../utilities/variables';

export const SelectStyled = styled.div`
  grid-column: 1/-1;
  position: relative;
  line-height: 3;
  background: #FFF;
  border: 1px solid #1e1b26;
  overflow: hidden;
  border-radius: 5px;
  font-size: 1.6rem;
  height: 50px;
  width: 400px;
  justify-self: center;
  display: grid;
  align-items: center;
  cursor: pointer;
  &:after {
      content: '\\25BC';
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 1em;
      background: #1e1b26;
      cursor: pointer;
      pointer-events: none;
      transition: .25s all ease;
  }
  &:hover::after {
    color: ${colors.tertiaryColor};
  }
  select {
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0 !important;
      background-image: none;
      width: 100%;
      height: 100%;
      cursor: pointer;
      color: ${colors.secondaryColor};
      padding-left: 10px;
  }
`
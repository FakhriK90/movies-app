import styled from "styled-components";
import { colors } from '../../utilities/variables';

export const PaginationStyled = styled.div`
    grid-column: 1/-1;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    align-items: center;
    border-radius: 5px;
    width: 400px;
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
        width: 400px;
        list-style-type: none;
        border-radius: 0.6rem;
        background: ${colors.white};
        box-shadow: 0 0.8rem 2rem rgba(90, 97, 129, 0.05);
        border: 1px solid ${colors.primaryColor};
        li {
            display: grid;
            justify-content: center;
            align-items: center;
            margin: 8px;
            cursor: pointer;
            a {
               text-decoration: none;
               font-size: 1.8rem;
               color: ${colors.secondaryColor};
               font-weight: 400;
            }
            &:not(.disabled):not(.active) a:hover {
              color: ${colors.tertiaryColor};
              transform: scale(1.2);
            }
            &.disabled a {
                opacity: 0.6;
            }
            &.active {
                background: ${colors.tertiaryColor};
                border-radius: 5px;
                a {
                    color: ${colors.white};
                    font-weight: 600;
                }
            }
        }
    }
`

export const SelectForPaginationContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 65px);
    justify-content: center;
`

export const SelectForPaginationStyled = styled.div`
    position: relative;
    background: ${colors.white};
    border: 1px solid ${colors.primaryColor};
    overflow: hidden;
    border-radius: 5px;
    font-size: 1.6rem;
    width: 50px;
    justify-self: center;
    display: grid;
    align-items: center;
    cursor: pointer;
    &:after {
      content: '\\25BC';
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 4px;
      background: ${colors.primaryColor};
      cursor: pointer;
      pointer-events: none;
      transition: .25s all ease;
    }
    &:hover::after {
       color: ${colors.tertiaryColor};
    }
    select {
       color: ${colors.secondaryColor};
    }
`
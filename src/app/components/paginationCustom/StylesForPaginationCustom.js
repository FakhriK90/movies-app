import styled from "styled-components";
import { colors } from '../../utilities/variables';

export const PaginationStyled = styled.div`
    grid-column: 1/-1;
    justify-self: center;
    display: grid;
    align-items: center;
    border-radius: 5px;
    height: 50px;
    width: 400px;
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
        justify-content: center;
        align-items: center;
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
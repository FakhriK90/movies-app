import styled from 'styled-components';
import {colors} from "../../utilities/variables";


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-row-gap: 20px;
    grid-column-gap: 30px;
    margin: 15px 20px;
    justify-content: center;
`

export const Title = styled.h1`
    color: ${colors.primaryColor};
    font-size: 3.6rem;
    text-align: center;
`

export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 9px;
    grid-row-gap: 20px;
    position: relative;
    padding: 20px 10px;
    background: ${colors.primaryColor};
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: all .2s ease-in-out;
    &:hover {
       transform: scale(1.05);
    }
   
`

export const CardInfo = styled.div`
    grid-column: 1/-1;
    justify-self: start;
    padding: 0 10px;
`

export const CardTitle = styled.h2`
    color: ${colors.white};
    font-size: 2.6rem;
`

export const CardCategory = styled.span`
    font-size: 1.2rem;
`

export const CardLikes = styled.span`
    cursor: pointer;
    font-size: 1.8rem;
    padding: 0 10px;
    text-align: center;
    i {
        color:${colors.tertiaryColor};
        opacity: ${props => props.active ? 1 : 0.5};
        transform: scale(${props => props.active ? 1.3 : ''});
        pointer-events: ${props => props.active ? 'none' : 'auto'};
        padding-right: 10px;
        &:hover {
            transform: scale(1.3);
            opacity: 1;
        }
    }
`

export const CardDelete = styled.div`
    position: absolute;
    right: 7px;
    top: 7px;
    width: 32px;
    height: 32px;
    opacity: 0.6;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: ${colors.tertiaryColor};
    }
    &:before { 
        transform: rotate(-45deg);
    }
    &:after { 
        transform: rotate(45deg);
    } 
`

export const CardSummary = styled.div`
    grid-column: 1/-1;
    h3 {
        text-transform: uppercase;
        color: ${colors.tertiaryColor};
    }
`
import React from "react";
import {SelectStyled } from "./StylesForSelectCustom";


const SelectCustom = ({categoryArr, dispatch}) => {
    return (
        <SelectStyled>
            <select onChange={e => dispatch({type: 'filter', category: e.target.value})}>
                <option selected value='default'>Choose a category</option>
                {Array.from(new Set(categoryArr)).map(category => {
                    return (<option value={category} key={category}>{category}</option>)
                })
                }
            </select>
        </SelectStyled>
    )
}

export default SelectCustom;
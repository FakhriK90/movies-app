import React from "react";
import Pagination from "react-js-pagination";
import {PaginationStyled, SelectForPaginationContainerStyled, SelectForPaginationStyled} from "./StylesForPaginationCustom";

const itemsCountPerPage = 4;
const pageRangeDisplayed = 3;

const PaginationCustom = ({state, activePage, handlePageChange, handleNumberMovies}) => {
    return (
        <PaginationStyled>
            <Pagination
                activePage={ activePage }
                itemsCountPerPage={ itemsCountPerPage }
                totalItemsCount={ state.length }
                pageRangeDisplayed={ pageRangeDisplayed }
                onChange={ handlePageChange }
            />
            <SelectForPaginationContainerStyled>
                <SelectForPaginationStyled>
                    <select onChange={e => handleNumberMovies(e.target.value)}>
                        <option value='4'>4</option>
                        <option value='8'>8</option>
                        <option value='12'>12</option>
                    </select>
                </SelectForPaginationStyled>
                <span>/ pages</span>
            </SelectForPaginationContainerStyled>
        </PaginationStyled>
    )
}

export default PaginationCustom;
import React from "react";
import Pagination from "react-js-pagination";
import {PaginationStyled, SelectForPaginationContainerStyled, SelectForPaginationStyled} from "./StylesForPaginationCustom";


const PaginationCustom = ({state, activePage, handlePageChange, handleNumberMovies}) => {
    return (
        <PaginationStyled>
            <Pagination
                activePage={ activePage }
                itemsCountPerPage={ 4 }
                totalItemsCount={ state.length }
                pageRangeDisplayed={ 3 }
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
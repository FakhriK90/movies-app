import React from "react";
import Pagination from "react-js-pagination";
import {PaginationStyled} from "./StylesForPaginationCustom";


const PaginationCustom = ({state, activePage, handlePageChange}) => {
    return (
        <PaginationStyled>
            <Pagination
                activePage={ activePage }
                itemsCountPerPage={ 4 }
                totalItemsCount={ state.length }
                pageRangeDisplayed={ 3 }
                onChange={ handlePageChange }
            />
        </PaginationStyled>
    )
}

export default PaginationCustom;
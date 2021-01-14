import React, {useReducer, useState} from "react";
import {movies$} from "../../movies";
import moviesReducer from "../../reducers/moviesReducer";
import {Grid, Title, Card, CardCategory, CardInfo, CardLikes, CardTitle, CardDelete, CardSummary } from "./StylesForMoviesList";
import SelectCustom from "../selectCustom/SelectCustom";
import PaginationCustom from "../paginationCustom/PaginationCustom";

const MoviesList = () => {
    const [state, dispatch] = useReducer(moviesReducer, []);
    const [ activePage, setCurrentPage ] = useState( 1 );
    const [moviesPerPage, setMoviesPerPage] = useState('4');
    const categoryArr = state.map(movie => movie.category);
    const indexOfLastMovie  = activePage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = state.slice( indexOfFirstMovie, indexOfLastMovie );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    React.useEffect(() => {
        const fetchMovies = async () => {
            return await movies$;
        };
        fetchMovies().then(data => dispatch({type: 'initial', data}));
    }, []);

    return (
        <>
            <Title>Movies Cards</Title>
            <Grid>
                <SelectCustom categoryArr={categoryArr} dispatch={dispatch} />
                {state &&
                    currentMovies.map(movie => {
                        if (movie.visible) {
                            return (
                                <Card key={movie.id}>
                                    <CardDelete onClick={() => dispatch({type: 'remove', id: movie.id})}></CardDelete>
                                    <CardInfo>
                                        <CardTitle>{movie.title}</CardTitle>
                                        <CardCategory>{movie.category}</CardCategory>
                                    </CardInfo>
                                    <CardSummary>
                                        <h3>Summary</h3>
                                        <p>{movie.summary}</p>
                                    </CardSummary>
                                    <CardLikes active={movie.likesActive}><i onClick={() => dispatch({type: 'like', id: movie.id})} className="fa fa-thumbs-up"></i>{movie.likes}</CardLikes>
                                    <CardLikes active={movie.dislikesActive}><i onClick={() => dispatch({type: 'dislike', id: movie.id})} className="fa fa-thumbs-down"></i> {movie.dislikes}</CardLikes>
                                </Card>
                            )
                        }

                    })
                }
                <PaginationCustom state={state} activePage={activePage} handlePageChange={handlePageChange} handleNumberMovies={setMoviesPerPage}/>
            </Grid>
        </>
    )
}

export default MoviesList;
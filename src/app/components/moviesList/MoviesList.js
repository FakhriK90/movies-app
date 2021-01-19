import React, {useEffect, useReducer, useState} from "react";
import {movies$} from "../../movies";
import moviesReducer from "../../reducers/moviesReducer";
import {moviesInitial, moviesRemove, moviesLikes, moviesDislikes} from "../../reducers/moviesReducer";
import {Grid, Title, Card, CardCategory, CardInfo, CardLikes, CardTitle, CardDelete, CardSummary } from "./StylesForMoviesList";
import SelectCustom from "../selectCustom/SelectCustom";
import PaginationCustom from "../paginationCustom/PaginationCustom";


const MoviesList = () => {
    const [state, dispatch] = useReducer(moviesReducer, []);
    const [activePage, setCurrentPage] = useState( 1 );
    const [moviesPerPage, setMoviesPerPage] = useState('4');
    const filteredCategory = Array.from(new Set(state.map(movie => movie.category)));
    const filteredMovies = state.filteredMovies;
    const indexOfLastMovie  = activePage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    let currentMovies = state.slice( indexOfFirstMovie, indexOfLastMovie );

    if (filteredMovies && filteredMovies.length !== 0) {
      currentMovies = filteredMovies.slice( indexOfFirstMovie, indexOfLastMovie );
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    // Act like componentDidMount
    useEffect(() => {
        const fetchMovies = async () => {
            return await movies$;
        };
        fetchMovies().then(data => dispatch(moviesInitial(data)));
    }, []); // [] as a dependency run only once after the first render

    return (
        <>
            <Title>Movies Cards</Title>
            <Grid>
                <SelectCustom filteredCategory={filteredCategory} dispatch={dispatch} />
                {state &&
                    currentMovies.map(movie => {
                        return (
                            <Card key={movie.id}>
                                <CardDelete onClick={() => dispatch(moviesRemove({id: movie.id}))}></CardDelete>
                                <CardInfo>
                                    <CardTitle>{movie.title}</CardTitle>
                                    <CardCategory>{movie.category}</CardCategory>
                                </CardInfo>
                                <CardSummary>
                                    <h3>Summary</h3>
                                    <p>{movie.summary}</p>
                                </CardSummary>
                                <CardLikes active={movie.likesActive}><i onClick={() => dispatch(moviesLikes({id: movie.id, type: 'likes'}))} className="fa fa-thumbs-up"></i>{movie.likes}</CardLikes>
                                <CardLikes active={movie.dislikesActive}><i onClick={() => dispatch(moviesLikes({id: movie.id, type: 'dislikes'}))} className="fa fa-thumbs-down"></i> {movie.dislikes}</CardLikes>
                            </Card>
                        )
                    })
                }
                <PaginationCustom state={filteredMovies && filteredMovies.length !== 0 ? filteredMovies : state} activePage={activePage} handlePageChange={handlePageChange} handleNumberMovies={setMoviesPerPage}/>
            </Grid>
        </>
    )
}

export default MoviesList;
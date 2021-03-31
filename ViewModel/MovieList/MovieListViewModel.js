import {GetAllMovies}  from "../../Redux/Action/MovieListAction";

const MovieListViewModel = 
{
    GetList : (page, region) => GetAllMovies(page, region)
    
}
export default MovieListViewModel
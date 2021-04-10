import {GetMovieDetails,GetCastandCrew}  from "../../Redux/Action/MovieDetailAction";

const MovieDetailViewModel = 
{
    GetMovieDetails : (id) => GetMovieDetails(id),
    GetCastandCrew : (id) => GetCastandCrew(id)
}
export default MovieDetailViewModel
import { MovieDetail_Success,MovieDetail_Loading,MovieDetail_Failed } from "../../Redux/Type/MovieDetailType";
import MovieDetailService from '../../Service/MovieDetails/MovieDetailService'

export const GetMovieDetails = (id) => 
{
    return dispatch =>
    {
        dispatch(ShowLoader())
        dispatch(AsyncGetMovieDetails(id))
    }
}

const AsyncGetMovieDetails = (id) => async dispatch =>
{
    MovieDetailService.GetMovieDetails(id)
    .then(
        data => {
            // console.log('AsyncGetMovieDetails Success data called' + JSON.stringify(data,null,2))
            dispatch({
                type : MovieDetail_Success,
                data : data
            })
            // console.log(data)
        },
        error => {
            console.log('AsyncGetMovieDetails error called' + data)
            dispatch({
                type : MovieDetail_Failed,
                data : error
            })
        }
    )
}

const ShowLoader = () => {
    return {
        type : MovieDetail_Loading
    }
}
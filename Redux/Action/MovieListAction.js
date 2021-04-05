import { Success,Loading,Failed } from "../../Redux/Type/MovieListType";
import MovieListService from '../../Service/MovieList/MovieListService'

export const GetAllMovies = (page, region) => 
{
    return dispatch =>
    {
        dispatch(ShowLoader())
        console.log('Action called')
        dispatch(AsyncGetAllMovieList(page, region))
    }
}

const AsyncGetAllMovieList = (page, region) => async dispatch =>
{
    // console.log('AsyncGetAllMovieList action called'+" page is " +page+" region is "+region)
     MovieListService.GetMovieList(page, region)
    .then(
        data => {
            // console.log('AsyncGetAllMovieList data called' + JSON.stringify(data,null,2))
            dispatch({
                type : Success,
                data : data
            })
            // console.log(data)
        },
        error => {
            console.log('AsyncGetAllMovieList error called' + data)
            dispatch({
                type : Failed,
                data : error
            })
        }
    )
}

const ShowLoader = () => {
    return {
        type : Loading
    }
}
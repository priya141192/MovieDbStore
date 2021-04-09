import {MovieDetail_Success,MovieDetail_Failed,MovieDetail_Loading} from '../../Redux/Type/MovieDetailType'

const initalState = {
    MovieDetailData : [],
    IsSuccessfull : false,
    IsLoading : false,
    Errordata : {}
}

const MovieDetailReducer = (state = initalState,action) => {
    switch(action.type)
    {
        case MovieDetail_Success : 
        // console.log("MovieDetailReducer success called" + JSON.stringify(action.data,null,2))
        //  console.log("MovieDetailReducer success called" + action.data)
        return {
            ...state,
            MovieDetailData :  action.data,//[...state.MovieDetailData,...action.data],
            IsSuccessfull : true,
            IsLoading : false
        }
        case MovieDetail_Loading : 
        return {
            ...state,
            IsLoading : true
        }
        case MovieDetail_Failed :
        return {
            ...state,
            Errordata : action.data,
            IsSuccessfull : false,
            IsLoading : false,
        }
        default : 
        return state
    }
}

export default MovieDetailReducer
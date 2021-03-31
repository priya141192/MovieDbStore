import {Success,Loading,Failed} from '../../Redux/Type/MovieListType'

const initalState = {
    MovieListData : {},
    IsSuccessfull : false,
    IsLoading : false,
    Errordata : {}
}

const MovieListReducer = (state = initalState,action) =>{
    switch(action.type)
    {
        case Success : 
        // console.log("Reducer success called" + JSON.stringify(action.data,null,2))
        return {
            ...state,
            MovieListData : action.data,
            IsSuccessfull : true,
            IsLoading : false
        }
        case Loading : 
        console.log("Reducer loading called")
        return {
            ...state,
            IsLoading : true
        }
        case Failed : 
        console.log("Reducer failed called")
        return {
            ...state,
            Errordata : action.data,
            IsSuccessfull : false,
            IsLoading : false,
        }
        default : 
        console.log("Reducer default called")
        return state
    }
}

export default MovieListReducer
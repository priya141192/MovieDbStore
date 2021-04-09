import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from 'redux-thunk';
import MovieListReducer from "../Reducer/MovieListReducer";
import MovieDetailReducer from "../Reducer/MovieDetailReducer";

const RootReducer = combineReducers({
    movieListReducer : MovieListReducer,
    movieDetailReducer : MovieDetailReducer
})

const ConfigureStore = () => createStore(RootReducer,applyMiddleware(thunk));

export default ConfigureStore
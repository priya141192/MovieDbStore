import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from 'redux-thunk';
import MovieListReducer from "../Reducer/MovieListReducer";

const RootReducer = combineReducers({
    movieListReducer : MovieListReducer
})

const ConfigureStore = () => createStore(RootReducer,applyMiddleware(thunk));

export default ConfigureStore
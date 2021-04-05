import  React, { useEffect,useState } from "react";
import { View,ActivityIndicator,FlatList,SafeAreaView } from "react-native";
import Customitem from "../../Views/MovieList/MovieListItemView";
import {styles} from "../../Utilities/Common/Styles"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { movieListReducer } from "../../Redux/Reducer/MovieListReducer";
import MovieListViewModel from '../../ViewModel/MovieList/MovieListViewModel'
import { Image_Url } from "../../Utilities/Constants/ServiceConstants";

const MovieListView = (props) => {

    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movieListReducer.MovieListData)
    const [region,setRegion] = useState("A")
    const [page,setPage] = useState(1)
    let isLoading =  false
    let fetchingStatus = false
    let onEndReached = false

    // useEffect(() => {
    //     // console.log("movielistdata method called",JSON.stringify(movieList.results,null,2))
    //     // dispatch (MovieListViewModel.GetList(page,region))
    // },[])

    useEffect(() => {
        console.log("useeffect method called")
        // isLoading = false
        dispatch (MovieListViewModel.GetList(page,region))
    },[page])

    fetchMovies = () => {
        isLoading = true
        fetchingStatus = true
        setPage(page + 1);
        console.log("fetchMovies method called page" + page)
        dispatch (MovieListViewModel.GetList(page,region))
    } 

    BottomView = () => {{ isLoading = true }
        return (
            <View>
                {
                    (isLoading)
                    ?
                        <ActivityIndicator size="large" color = "#694d91" style = {{ marginLeft: 6 }} />
                    :
                        null
                }
            </View>  
        )
    }
    return(
        <SafeAreaView>
            <View styles = {styles.maincontainerStyle}>
            {
                (isLoading) ?
                ( BottomView)
                :
                (
                    <FlatList
                    data={movieList}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={data => 
                    <Customitem
                        imgsource = {{uri : Image_Url + data.item.poster_path}}
                        btntitle = {'Book Now'}
                        name = {data.item.title}
                        date = {data.item.release_date}
                        vote_count = {data.item.vote_count}
                        rate_text = {data.item.vote_average}
                        />}
                        initialNumToRender={8}
                        maxToRenderPerBatch={2}
                        onEndReachedThreshold={0.1}
                        onMomentumScrollBegin = {() => {onEndReached = false;}}
                        ListFooterComponent = {BottomView}
                        onEndReached = {() => {
                            if (!this.onEndReached) {
                                 fetchMovies();   // on End reached
                                  onEndReached = true;
                                  isLoading = false;
                            }
                       }}
                        />
                )
            }
            </View>
        
        </SafeAreaView>
    );
}

export default MovieListView
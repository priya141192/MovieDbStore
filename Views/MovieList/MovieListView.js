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
    const mockData = [
        { id: '1', text: 'Book Now',title:'Hard Kill',date:'23 Oct, 2020',ratetext:'65' },
      ]

    useEffect(() => {
        console.log("movielistdata method called",JSON.stringify(movieList,null,2))
        // dispatch (MovieListViewModel.GetList(page,region))
    },[])

    useEffect(() => {
        console.log("useeffect method called")
        dispatch (MovieListViewModel.GetList(page,region))
    },[page])
    
    return(
        <SafeAreaView>
        <View styles = {styles.maincontainerStyle}>
            {/* <FlatList
            data = {movieList}
            keyExtractor = {item => item.id.toString()}
            renderItem={({item}) => <Customitem
                poster_path = {item.poster_path }
                btntitle = {item.name}
                title = {item.title}
                date = {item.release_date}/>
            }>
            </FlatList> */}
            <FlatList
                data={movieList.results}
                keyExtractor={item => item.id.toString()}
                renderItem={data => 
                <Customitem
                    imgsource = {{uri : Image_Url + data.item.poster_path}}
                    btntitle = {'Book Now'}
                    name = {data.item.title}
                    date = {data.item.release_date}
                    vote_count = {data.item.vote_count}
                    rate_text = {data.item.vote_average}
                    />}/>
        </View>
        </SafeAreaView>
    );
}

export default MovieListView
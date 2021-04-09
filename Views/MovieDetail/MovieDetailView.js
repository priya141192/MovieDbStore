import  React, { useEffect,useState } from "react";
import { SafeAreaView,ScrollView,View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../../Utilities/Common/Styles";
import DetailContainer from "./DetailContainer";
import ImageContainer from "./ImageContainer";
import movieDetailReducer from "../../Redux/Reducer/MovieDetailReducer"
import MovieDetailViewModel from "../../ViewModel/MovieDetails/MovieDetailViewModel"
import {Image_Url} from "../../Utilities/Constants/ServiceConstants"

const MovieDetailView = ({route,navigation}) => {
    const  MovieId  = route.params.MovieId
    const MovieData = useSelector(state => state.movieDetailReducer.MovieDetailData)
    const [isLoading,setisLoading] = useState(false) 
    const dispatch = useDispatch()

    // useEffect ( () => {
    //     console.log("************state "+JSON.stringify(MovieData))
    // },[MovieData])


    useEffect (() => {
        // console.log("************state "+JSON.stringify(MovieData,null,2))
        // console.log("Moview Id" + MovieId)
        dispatch(MovieDetailViewModel.GetMovieDetails(MovieId))
    },[MovieId])
    console.log("MovieDetailView#####" +  MovieData.release_date)
    return(
        <SafeAreaView style = {{backgroundColor : '#e7e7e7'}}>
                    <ScrollView
                        contentInsetAdjustmentBehavior = 'automatic'
                        showsVerticalScrollIndicator = {false}
                        style = {{backgroundColor :'#e7e7e7'}}>
                        <ImageContainer imgsource={{uri : Image_Url + MovieData.backdrop_path}}
                        overlap_imgsource = {{uri : Image_Url + MovieData.poster_path}}
                        moviename = {MovieData.original_title}
                        releasedates = {MovieData.release_date +". "+ MovieData.runtime+"m"}
                        moviefeatures = {MovieData.release_date}
                        movieoverview = {MovieData.overview}/>
                        {/* <DetailContainer/> */}
                    </ScrollView>
                
        </SafeAreaView>
    )
}

export default MovieDetailView
import  React, { useEffect } from "react";
import { View,FlatList,SafeAreaView,Animated ,Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../../Utilities/Common/Styles";
import CastListItemView from "./CastListItemView";
import movieDetailReducer from "../../Redux/Reducer/MovieDetailReducer"
import MovieDetailViewModel from "../../ViewModel/MovieDetails/MovieDetailViewModel";
import {Image_Url} from "../../Utilities/Constants/ServiceConstants"

const DetailContainer = (props) => {
  const  MovieId  = props.value
  const CastAndCrewData = useSelector(state => state.movieDetailReducer.CastandCrewData)
  const dispatch = useDispatch()

  //  useEffect(() => {
  //     console.log("DetailContainer movieid********" + CastAndCrewData)
  //   },[])

  useEffect(() => {
    // console.log("useEffect**********" + JSON.stringify(CastAndCrewData))
    // console.log("useEffect############" + CastAndCrewData.crew)
    dispatch(MovieDetailViewModel.GetCastandCrew(MovieId))
  },[MovieId])

    return(
        <SafeAreaView>
                {/* Cast Section */}
                <View style = {{backgroundColor : 'white',flex : 1}}>
                    <Text style = {styles.headertextstyle}>Cast</Text>
                    <View style={styles.separatorstyle}/>
                    <FlatList 
                    showsHorizontalScrollIndicator = {false}
                    horizontal = {true}
                    style = {{backgroundColor : 'white',width : "100%",height : '35%'}}
                    data = {CastAndCrewData.cast}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {data => 
                        <CastListItemView
                        imgsource = {{uri : Image_Url + data.item.profile_path}}
                        name = {data.item.name}/>
                    }
                    initialNumToRender={8}
                    maxToRenderPerBatch={2}
                    onEndReachedThreshold={0.1}>
                    </FlatList>
                </View>
                
                {/* Crew Section */}
                <View style = {{backgroundColor : 'white',marginTop : 10,flex:1}}>
                    <Text style = {styles.headertextstyle}>Crew</Text>
                    <View style={styles.separatorstyle}/>
                    <FlatList 
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    style = {{backgroundColor : 'white',width : "100%",height : '35%'}}
                    data = {CastAndCrewData.crew}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {data => 
                        <CastListItemView
                        imgsource = {{uri : data.item.uri}}
                        name = {data.item.name}/>}
                    initialNumToRender={8}
                    maxToRenderPerBatch={2}
                    onEndReachedThreshold={0.1}>
                    </FlatList>
                </View>
        
        </SafeAreaView>
    )
}

export default DetailContainer
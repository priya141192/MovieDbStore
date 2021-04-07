import  React, { useEffect,useState } from "react";
import { View,ActivityIndicator,FlatList,SafeAreaView,Animated,Image } from "react-native";
import { styles } from "../../Utilities/Common/Styles";
import DetailContainer from "./DetailContainer";
import ImageContainer from "./ImageContainer";

const MovieDetailView = (props) => {
    return(
        <SafeAreaView style = {{backgroundColor : '#e7e7e7'}}>
            <ImageContainer/>
            <DetailContainer/>
        </SafeAreaView>
    )
}

export default MovieDetailView
import  React, { useEffect,useState } from "react";
import { View,ActivityIndicator,FlatList,SafeAreaView,Image,TextInput,Text } from "react-native";
import { styles } from "../../Utilities/Common/Styles";

const ImageContainer = (props) => {
    return(
        <SafeAreaView style = {{marginBottom : 10}}>
            <View style = {{backgroundColor : 'white'}}>
                {/* Banner Image */}
                <Image
                source = {props.imgsource}
                style = {styles.detail_img_style}/>

                {/* Overlapped image View */}
                <View style ={styles.movie_detail_overlap_view_style} > 
                    <View style = {{justifyContent : 'flex-end',alignSelf : 'flex-end',flex : 1}}>
                        <Image style ={styles.movie_detail_overlap_img_style} source={props.overlap_imgsource} /> 
                        <View style = {{flex  : 1,flexDirection : 'row'}}>
                            <View style = {{flex : 1,marginLeft:10}}/>
                            <Text style={styles.movienamestyle}>{props.moviename}</Text>
                        </View>
                    </View>
                </View>
                

                {/* Information View */}
                <View style={{
                    flexDirection: 'row', alignItems: 'flex-start',
                    justifyContent: 'flex-start', marginLeft: 10, alignSelf : 'flex-start',
                    backgroundColor: 'white',}}>
                    <View style={{ flexDirection: 'column', marginTop: 10, marginBottom: 15}}>
                        <Text style={styles.featurestextstyle}>{props.releasedates}</Text>
                        <Text style={styles.featurestextstyle}>{props.moviefeatures}</Text>
                        <Text style={styles.contenttextstyle,{marginLeft : 15,marginRight : 15,padding : 5,justifyContent : 'center'}}>{props.movieoverview}</Text>
                        
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ImageContainer
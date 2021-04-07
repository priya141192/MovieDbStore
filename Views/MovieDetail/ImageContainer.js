import  React, { useEffect,useState } from "react";
import { View,ActivityIndicator,FlatList,SafeAreaView,Image,Text } from "react-native";
import { styles } from "../../Utilities/Common/Styles";

const ImageContainer = (props) => {
    return(
        <SafeAreaView style = {{marginBottom : 10}}>
            <View style = {{backgroundColor : 'white'}}>
                <Image
                source = {{ uri : 'https://trumpwallpapers.com/wp-content/uploads/Stranger-Things-Wallpaper-01.jpg'}}
                style = {styles.detail_img_style}/>
                <View style ={styles.movie_detail_overlap_view_style} > 
                    <Image style ={styles.movie_detail_overlap_img_style}  
                    source={{ uri: 'https://placeimg.com/640/480/people' }} /> 
                    <View style = {{backgroundColor : 'blue',justifyContent : 'flex-end',flex : 1,
                    alignSelf : 'flex-end',fontSize : 20}}>
                                <Text >Centered text daDSDasdasadsSdsSsdsDdsDSDd</Text>
                    </View>
                    
                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'flex-start',
                    justifyContent: 'flex-start', marginLeft: 10, alignSelf : 'flex-start',
                    backgroundColor: 'white',}}>

                    <View style={{ flexDirection: 'column', marginTop: 10, marginBottom: 15 }}>
                        <Text style={styles.featurestextstyle}>West Mambalam</Text>
                        <Text style={styles.featurestextstyle}>West Mambalam</Text>
                        <Text style={styles.contenttextstyle}>Cecelia Fletcher</Text>
                        
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ImageContainer
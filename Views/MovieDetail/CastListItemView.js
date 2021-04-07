import  React from "react";
import { View,SafeAreaView ,Text,Image} from "react-native";
import {styles} from "../../Utilities/Common/Styles";

const CastListItemView = (props) => {
    return(
        <SafeAreaView style = {styles.movie_detail_style}>
            <View style = {{flexDirection : 'column',flex:1,alignItems : 'center',borderRadius : '10',borderWidth : '1',margin : 20}}>
                <Image source= {props.imgsource} style = {styles.rounded_img}></Image>
                <Text style = {styles.contenttextstyle}>{props.name}</Text>
            </View>
        </SafeAreaView>
    )
}

export default CastListItemView
import React from "react";
import { Image,Text, View,TouchableOpacity } from "react-native";
import LabelView from "../../Helper/labelview";
import {styles} from "../../Utilities/Common/Styles";
import * as ImgConstants from '../../Utilities/Constants/ImageConstants'

const MovieListItemView = (props) =>{
    return(
        <TouchableOpacity onPress = {() => {props.onPress(props.id)}}>
             <View style = {styles.maincontainerStyle}>
                <View style = {styles.image_btn_itemStyle} >
                    <Image style = {styles.itemimgStyle} source={props.imgsource}/>
                    <View style={{flex : 1,marginLeft : 10,alignContent : 'center',alignSelf:'center',justifyContent:'center'}}>
                        <Text style = {styles.movie_titleStyle}>{props.name}</Text>
                        <LabelView Text = {props.date} imgsource = {ImgConstants.img_date}></LabelView>
                        <View style = {{flexDirection : 'row'}}>
                            <LabelView Text = {props.vote_count} imgsource = {ImgConstants.img_vote}></LabelView>        
                            <Text style = {{marginRight : 10,marginLeft : 10}}>|</Text>
                            <Text style = {{marginRight : 10,}}>Rate: {props.rate_text}</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.btncontainer_itemStyle}>
                <TouchableOpacity  onPress = {props.onPress} style = {styles.buttonStyle}>
                        <Text style = {styles.btn_text_Style}>{props.btntitle}</Text>
                </TouchableOpacity>
                </View>
            </View>
        
        </TouchableOpacity>
     )
}

export default MovieListItemView
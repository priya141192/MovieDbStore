import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    maincontainerStyle : {
        backgroundColor :'#e7e7e7',
        paddingTop : 5,
        paddingBottom : 5,
        paddingLeft : 10,
        paddingRight : 10,
        height : '100%',
        width : '100%',
        flex: 1,
        flexDirection : "column"
    },
    image_btn_itemStyle : {
        backgroundColor :'white',
        height : '100%',
        width : '100%',
        flex: 3,
        flexDirection : "row",
        padding : 10,
    },
    btncontainer_itemStyle : {
        height : '100%',
        width : '100%',
        flex: 1,
        flexDirection : "row",
        paddingLeft : 10,
        paddingBottom : 10,
        alignItems : 'baseline',
        alignSelf : 'stretch',
        backgroundColor :'white',
    },
    itemcontainerStyle : {
        padding : 10,
        justifyContent : 'center',
        flexDirection : 'column',
        backgroundColor : 'green',
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        elevation: 8,
        shadowOffset : { width: 1, height: 13},
    },
    movie_titleStyle : {
        color : 'black',
        fontStyle : 'normal',
        fontWeight :'bold',
        fontSize : 15,
        marginBottom : 10,
        justifyContent : 'center',
        alignSelf : 'center',
        alignItems : 'center',
        alignSelf : 'flex-start'
    },
    movie_detailStyle : {
        color : 'black',
        fontStyle : 'normal',
        fontSize : 15,
        marginBottom : 5,
        justifyContent : 'center',
        alignSelf : 'center',
        alignItems : 'center',
        alignSelf : 'flex-start',
        flexDirection : 'row'
    },
    itemimgStyle : {
        height : 100,
        width : 100,
        alignSelf : 'center',
        alignItems : 'center',
        resizeMode : 'stretch',
    },
    listStyle : {
        height : '100%',
        width : '100%',
    },
    buttonStyle : {
        elevation : 2,
        backgroundColor : '#694d91',
        color : 'white',
        alignSelf : 'center',
        marginTop : 5,
        padding : 5,
        opacity : 10,
        borderRadius: 5,
        width : 100,
    },
    btn_text_Style : {
        color : 'white',
        fontStyle : 'normal',
        fontSize : 15,
        justifyContent : 'center',
        alignSelf : 'center',
        alignItems : 'center',
        alignSelf : 'center',
        padding : 5,
        fontWeight : 'bold'
    },
    textinputcontainerStyle : 
    {
        flexDirection : 'row',
        marginBottom : 10,
        alignSelf : 'flex-start',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    iconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        alignItems : 'center',
        alignSelf : 'center',
        marginRight : 10
    },
    textinputStyle : {
        color : 'black',
        fontSize : 15,
        fontWeight : 'normal',
        alignSelf : 'flex-start',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    },
    detail_img_style : {
        height : 200 ,
        resizeMode : 'stretch',
        borderRadius : 5,
        margin : 10,
        marginLeft : 20,
        marginRight : 20,
    },
    movie_detail_style : {
        justifyContent : 'center',
    },
    movie_detail_overlap_view_style : {
        flexDirection: 'row', 
        alignItems: 'flex-end',
        paddingTop : 40,  
        marginLeft: 20, 
    },
    movie_detail_overlap_img_style : {
        position:'absolute',zIndex :5,
        height : 190,
        width : 150,
        margin : 10,
        resizeMode : 'stretch',
        borderColor : 'white',
        borderWidth: 1,
    },
    rounded_img : {
        height : 80,
        width : 80,
        borderRadius : 80/2,
    },
    contenttextstyle : {
        fontSize : 15,
        color : 'black',
        margin : 5,
        fontWeight : 'normal',
    },
    headertextstyle : {
        fontSize : 15,
        color : 'black',
        margin : 5,
        fontWeight : 'bold',
        padding : 10
    },
    featurestextstyle : {
        color: '#9E9C9E', 
        marginLeft: 15, 
        fontSize: 12, 
        padding : 5
    },
    separatorstyle : {
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 2,
    },
    movienamestyle : {
        textAlign: 'center',
        flex:1.5,
        justifyContent:'center',
        alignSelf : 'center',
        fontSize : 25,
        fontWeight : 'bold'
    }
    }
)
import  React, { useEffect } from "react";
import { View,FlatList,SafeAreaView,Animated ,Text} from "react-native";
import { styles } from "../../Utilities/Common/Styles";
import CastListItemView from "./CastListItemView";

const DetailContainer = (props) => {

    const mockdata =[
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://picsum.photos/id/1/200',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://picsum.photos/id/10/200',
        },
  
        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://picsum.photos/id/1002/200',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://picsum.photos/id/1006/200',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://picsum.photos/id/1008/200',
        },
      ];

      useEffect(() => {
        
      })
      
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
                    data = {mockdata}
                    keyExtractor={(item, index) => String(index)}
                    renderItem = {data => 
                        <CastListItemView
                        imgsource = {{uri : data.item.uri}}
                        name = {data.item.text}/>
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
                    style = {{backgroundColor : 'white',width : "100%",height : '40%'}}
                    data = {mockdata}
                    keyExtractor={(item, index) => String(index)}
                    renderItem = {data => 
                        <CastListItemView
                        imgsource = {{uri : data.item.uri}}
                        name = {data.item.text}/>}
                    initialNumToRender={8}
                    maxToRenderPerBatch={2}
                    onEndReachedThreshold={0.1}>
                    </FlatList>
                </View>
        </SafeAreaView>
    )
}

export default DetailContainer
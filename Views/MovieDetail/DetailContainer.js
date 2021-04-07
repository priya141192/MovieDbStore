import  React, { useEffect,useState } from "react";
import { View,ActivityIndicator,FlatList,SafeAreaView,Animated ,Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
      
    return(
        <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior = 'automatic'
            showsVerticalScrollIndicator = {false}
            style = {{backgroundColor :'#e7e7e7'}}>
                 <View style = {{backgroundColor : 'white'}}>
                    <Text style = {styles.headertextstyle}>Cast</Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}/>
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

                <View style = {{backgroundColor : 'white',marginTop : 10}}>
                    <Text style = {styles.headertextstyle}>Crew</Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}/>
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
        
            </ScrollView>
           
        </SafeAreaView>
    )
}

export default DetailContainer
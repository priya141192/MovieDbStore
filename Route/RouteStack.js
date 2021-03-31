import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MovieListView from '../Views/MovieList/MovieListView'
import { Image,Button, View,TouchableOpacity,SafeAreaView } from "react-native";
import SearchHeader from 'react-native-search-header';
import {styles} from "../Utilities/Common/Styles";
import * as ImgConstants from '../Utilities/Constants/ImageConstants'

const RouteStack = () => 
{
    const Stack = createStackNavigator()
        return (
            <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="MovieList"
            screenOptions = {
                {
                    headerShown : true,
                    headerStyle : 
                    {
                        backgroundColor : '#694d91'
                    },
                    headerTintColor : 'white',
                    headerTitleStyle :
                    {
                        fontSize : 15, 
                        fontWeight : 'bold'
                    }
                    
                }
            }>
            <Stack.Screen
            name = "Movie List"
            component = {MovieListView}
            options = {{
                headerRight: () => (
                    <TouchableOpacity>
                        <Image source = {ImgConstants.img_search} style = {styles.iconStyle}/>
                    </TouchableOpacity>
                )
            }}>
            </Stack.Screen>
            </Stack.Navigator>
            </NavigationContainer>
            )
        }
        
        export default RouteStack
        
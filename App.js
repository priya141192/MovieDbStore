/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RouteStack from './Route/RouteStack';
import MovieListView from './Views/MovieList/MovieListView';

const App = () =>
{
  return(
    // <MovieListView/>
    <RouteStack></RouteStack>
  );
}

export default App;

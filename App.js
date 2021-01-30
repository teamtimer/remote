import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootContainer from './App/Containers/RootContainer'

import createStore from './App/Redux'
import { Provider } from 'react-redux'

import './App/Config/Reactotron'

const store = createStore();

export default function App() {
  
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
    
  );
}

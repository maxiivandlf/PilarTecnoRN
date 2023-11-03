import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import { screens } from './src/screens';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import StackNavigations from './src/routes/StackNavigations';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StackNavigations />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};
const styles = StyleSheet.create({});

export default App;

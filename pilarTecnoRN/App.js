import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import screen from './src/screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <screen.Home />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});

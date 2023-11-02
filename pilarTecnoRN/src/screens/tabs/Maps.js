import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { theme } from '../../constants/theme';
import { components } from '../../components';

const Maps = () => {
  return (
    <SafeAreaView>
      <components.Header titleHeader='MAPS' />
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a maps</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: theme.colors.base100,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    color: theme.colors.primary,
  },
});

export default Maps;

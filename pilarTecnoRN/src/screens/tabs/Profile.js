import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { components } from '../../components';
import { theme } from '../../constants/theme';

const Profile = () => {
  return (
    <SafeAreaView>
      <components.Header titleHeader='PERFIL' />
      <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
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

export default Profile;

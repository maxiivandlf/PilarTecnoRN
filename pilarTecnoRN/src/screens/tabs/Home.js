import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { components } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../constants/theme';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <components.Header titleHeader='INICIO' />
      <View style={styles.home}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('List');
            }}
            style={styles.btn}
          >
            <Text>Pokemons</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('Maps');
            }}
          >
            <Text>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={styles.btn}
          >
            <Text>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    padding: 20,
    height: '100%',
    backgroundColor: theme.colors.neutral,
  },
  container: {
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.accent,
    marginVertical: 15,
  },
  btn: {
    margin: 5,
    backgroundColor: theme.colors.primary,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
export default Home;

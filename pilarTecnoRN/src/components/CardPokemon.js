import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { IMG_URL } from '../constants/URLPokemons';
import { theme } from '../constants/theme';
import { Text, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const getPokemonImgId = (id) => {
  switch (id.length) {
    case 1:
      return `00${id}`;
    case 2:
      return `0${id}`;
    default:
      return id;
  }
};

const CardPokemon = ({ title, pokeImg }) => {
  const navigation = useNavigation();

  const path = pokeImg.split('/');
  const imgID = getPokemonImgId(path[6]);

  const handleCardPress = () => {
    navigation.navigate('ListDetail', { pokemonName: title, imgID: imgID });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handleCardPress}>
      <Text style={styles.title}>{title}</Text>
      <Avatar size='large' source={{ uri: `${IMG_URL}${imgID}.png` }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1.2,
    backgroundColor: theme.colors.info,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 8,
    marginHorizontal: 1,
    height: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default CardPokemon;

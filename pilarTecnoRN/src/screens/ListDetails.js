import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { components } from '../components';
import { theme } from '../constants/theme';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';
import { loading, setPokemonDetail } from '../redux/pokeSlice';
import { Avatar } from 'react-native-elements';
import { IMG_URL } from '../constants/URLPokemons';
import { Skeleton } from '@rneui/themed';

const ListDetails = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemons = async (pokeName) => {
    const urlPokeDetails = `${api.URLpokemons}/${pokeName}/`;
    try {
      setIsLoading(true);
      const response = await api.GET(urlPokeDetails);
      if (response) {
        dispatch(setPokemonDetail(response));
        setIsLoading(false);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemons(pokemonName);
  }, [loading]);

  const route = useRoute();
  const { pokemonName, imgID } = route.params;
  return (
    <SafeAreaView>
      <components.Header titleHeader={'Detalle Pokemon'} />
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.cardDetail}>
            <Skeleton width={120} height={80} style={{ marginVertical: 20 }} />
            <Skeleton circle width={80} height={80} />
          </View>
        ) : (
          <View style={styles.cardDetail}>
            <Text style={styles.title}>{pokemonName}</Text>
            <Text style={styles.textInfo}>
              {`Altura: ${pokemon.pokemonDetail.height} m`}
            </Text>
            <Text style={styles.textInfo}>
              {`Experiencia base:  ${pokemon.pokemonDetail.base_experience} XP`}
            </Text>
            <Text style={styles.textInfo}>
              {`Peso: ${pokemon.pokemonDetail.weight} kg`}
            </Text>
            <Text style={styles.textInfo}>
              {`Tipo: ${pokemon.pokemonDetail.types[0].type.name}`}
            </Text>
            <Text style={styles.textInfo}>
              {`Habilidad: ${pokemon.pokemonDetail.abilities[0].ability.name}`}
            </Text>
            <Text style={styles.textInfo}>
              {`Movimiento: ${pokemon.pokemonDetail.moves[0].move.name}`}
            </Text>
            <Text style={styles.textInfo}>
              {`Movimiento: ${pokemon.pokemonDetail.moves[1].move.name}`}
            </Text>
            <Avatar size='large' source={{ uri: `${IMG_URL}${imgID}.png` }} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '90%',
    backgroundColor: theme.colors.base100,
    alignItems: 'center',
    paddingBottom: 20,
    justifyContent: 'center',
  },
  cardDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 2,
    padding: 40,
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    marginVertical: 20,
    color: theme.colors.primary,
    textTransform: 'capitalize',
  },
  textInfo: {
    fontSize: 20,
    color: theme.colors.secondary,
  },
  button: {
    borderRadius: 50,
  },
  loadingText: {
    color: theme.colors.warning,
  },
});

export default ListDetails;

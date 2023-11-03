import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { Button } from 'react-native-elements';
import React, { useState, useEffect, useCallback } from 'react';
import { theme } from '../../constants/theme';
import { components } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { loading } from '../../redux/pokeSlice';
import api from '../../services/api';

const List = (props) => {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      dispatch(loading(true));
      const response = await api.GET(api.URLpokemons);
      if (response) {
        setPokemons(response.results);
        dispatch(setPokemons(response.results));
        setNext(response.next);
      }
    } catch (error) {
    } finally {
      dispatch(loading(false));
    }
  };
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log('refreshing');
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const loadMore = async () => {
    try {
      dispatch(loading(true));
      const result = await api.GET(next);
      if (result) {
        console.log('poke: ', result.results);
        setPokemons([...pokemons, ...result.results]);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(loading(false));
    }
  };

  return (
    <SafeAreaView>
      <components.Header titleHeader='POKEMONS' />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ height: '100%', paddingBottom: 20 }}
          data={pokemons}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <components.CardPokemon
                title={item.name}
                pokeImg={item.url}
                props={props}
              />
            );
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh()}
            />
          }
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator />
            ) : (
              <Button
                style={styles.button}
                title='Cargar mas'
                onPress={() => loadMore()}
              />
            )
          }
        />
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
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    color: theme.colors.primary,
  },
  button: {
    borderRadius: 50,
  },
});

export default List;

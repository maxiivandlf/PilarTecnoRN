import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { hasLocationPermission } from '../../utilities/locationPermission';
import MapView, { Marker } from 'react-native-maps';
import { Image, Icon } from '@rneui/base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ASPECT_RATIO = windowWidth / windowHeight;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Maps = () => {
  const mapRef = useRef();
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    hasLocationPermission();
  }, []);

  _getLocation = async () => {
    await Geolocation.getCurrentPosition(
      async (posicion) => {
        const longitude = posicion.coords.longitude;
        const latitude = posicion.coords.latitude;

        mapRef.current.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          },
          1000
        );

        setRegion({ ...region, longitude, latitude });
        console.log(
          'posicion actual... Latitud: ' +
            `${JSON.stringify(longitude)}` +
            ' latitud:' +
            `${JSON.stringify(latitude)}`
        );
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
      }
    );
  };
  const onRegionChange = (region) => {
    setRegion(region);
  };

  const fitCoordinates = async () => {
    console.log('centrando mapa');
    _getLocation();
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        mapType='standard'
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={onRegionChange}
      />
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 100,
          width: windowWidth / 10,
          alignSelf: 'flex-end',
          margin: 20,
          marginRight: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon
          name='crosshairs'
          type='font-awesome'
          color='#8d2d84'
          size={windowWidth / 10}
          onPress={() => fitCoordinates()}
        />
      </View>
      <View style={styles.markerFixed}>
        <Image
          style={styles.marker}
          source={require('../../assets/icon/pinMaps.png')}
        />
      </View>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.region}>
          longitud:
          {JSON.stringify(region.longitude)}
          {'\n'}latitud:
          {JSON.stringify(region.latitude)}
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    margin: windowWidth / 20,
    height: windowWidth / 2.5,
    width: windowWidth / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: windowWidth,
    height: windowHeight,
    alignSelf: 'center',
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 30,
    position: 'absolute',
    width: '100%',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
    alignSelf: 'center',
  },
});

export default Maps;

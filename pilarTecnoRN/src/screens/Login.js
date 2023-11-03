import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import { theme } from '../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ setIsLogin }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/img/1.jpg')}
        style={{
          width: windowWidth,
          height: windowHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode='cover'
        blurRadius={5}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          <KeyboardAwareScrollView
            style={{
              height: windowHeight - 200,
            }}
          >
            <TextInput placeholder='Correo' style={styles.input} />
            <TextInput
              placeholder='Contraseña'
              style={styles.input}
              secureTextEntry={true}
            />
          </KeyboardAwareScrollView>
          <TouchableOpacity
            onPress={() => {
              setIsLogin(true);
            }}
            style={styles.button}
          >
            <Text>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    height: '50%',
    borderRadius: 20,
    backgroundColor: '#ffffff7a',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    color: theme.colors.primary,
    textTransform: 'uppercase',
  },
  input: {
    width: windowWidth - 40,
    height: 40,
    margin: 12,

    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.primary,
  },
  button: {
    width: windowWidth - 40,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
});

export default Login;

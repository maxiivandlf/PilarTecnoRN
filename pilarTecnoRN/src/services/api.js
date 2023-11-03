import axios from 'axios';

import { BASE_URL } from '../constants/URLPokemons';

const headers = () => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return headers;
};

const GET = async (url, payload) => {
  try {
    const response = await axios.get(url, payload, headers());
    if (response.lenght !== 0) {
      return response.data;
    } else {
      throw new Error({ message: 'No se encontraron resultados' });
    }
  } catch (error) {
    throw (error && error.response.data) || errorMessage;
  }
};

const errorMessage = {
  message: 'Error en el servidor',
  name: 'ServerError',
  statusCode: 500,
};

export default { GET, URLpokemons: `${BASE_URL}/pokemon` };

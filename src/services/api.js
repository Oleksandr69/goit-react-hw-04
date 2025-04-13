import axios from 'axios';

const clientId = 'd27JQlwSrVgo4sMBiErFp0HjHT7q7um4IZue84OcpdA';
axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchData = async (value, page, perPage) => {
  try {
    const response = await axios.get('/search/photos/', {
      params: {
        query: value,
        page,
        per_page: perPage,
        client_id: clientId,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetchData;

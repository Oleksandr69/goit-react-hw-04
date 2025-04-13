import axios from 'axios';

const clientKeys = {
  applicationID: 734416,
  accessKey: 'd27JQlwSrVgo4sMBiErFp0HjHT7q7um4IZue84OcpdA',
  secretKey: '6wMe2HfsUk9Sc5DMjWxVNxgV_k3GfVpnFuw1VFD9EB4',
};

axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchData = async (value, page, perPage) => {
  try {
    const response = await axios.get('/search/photos/', {
      params: {
        query: value,
        page,
        per_page: perPage,
        client_id: clientKeys.accessKey,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetchData;

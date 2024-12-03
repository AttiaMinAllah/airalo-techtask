const axios = require('axios');
const { API_BASE_URL, CLIENT_ID, CLIENT_SECRET } = require('../../consts');

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v2/token`,
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
      },
      { timeout: 15000 }
    );

    const accessToken = response.data?.data?.access_token;
    if (!accessToken) {
      throw new Error('Failed to fetch access token');
    }

    return accessToken;
  } catch (error) {
    throw error;
  }
};

module.exports = getAccessToken;

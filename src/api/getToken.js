const axios = require('axios');
const { API_BASE_URL, CLIENT_ID, CLIENT_SECRET } = require('../../consts');

const getAccessToken = async () => {
  try {
    console.log('Starting token request...');
    const response = await axios.post(
      `${API_BASE_URL}/v2/token`,
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
      },
      { timeout: 15000 } 
    );

    // access token 
    const accessToken = response.data?.data?.access_token;
    if (!accessToken) {
      console.error('No access token received:', response.data);
      throw new Error('Failed to fetch access token');
    }

    console.log('Token request completed successfully:', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error.message);
    throw error;
  }
};

module.exports = getAccessToken;

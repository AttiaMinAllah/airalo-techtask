const axios = require('axios');
const { API_BASE_URL } = require('../../consts');

const getSimsList = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v2/sims`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: 15000,
    });
    return response;
  } catch (error) {
    console.error('Error fetching eSIM list:', error.message);
    throw error;
  }
};

module.exports = getSimsList;

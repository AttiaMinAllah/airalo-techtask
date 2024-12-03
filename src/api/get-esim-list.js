const axios = require('axios');
const { API_BASE_URL } = require('../../consts');

const getSimsList = async (token, orderId = null) => {
  try {
    let url = `${API_BASE_URL}/v2/sims`;
    if (orderId) {
      url = `${API_BASE_URL}/v2/orders/${orderId}`;
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      timeout: 15000,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = getSimsList;

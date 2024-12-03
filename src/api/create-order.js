const axios = require('axios');
const { API_BASE_URL } = require('../../consts');

const postOrder = async (token, requestBody) => {
  const response = await axios.post(
    `${API_BASE_URL}/v2/orders`,
    requestBody,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      timeout: 15000, 
    }
  );
  return response;
};

module.exports = postOrder;

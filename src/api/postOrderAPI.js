const axios = require('axios');
const { API_BASE_URL } = require('../../consts');

const postOrder = async (token, requestBody) => {
  try {
    console.log('Sending order request with payload:', requestBody);

    // Send the POST request
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

    console.log('Order creation response:', response.data);
    return response; // Return the response to the caller
  } catch (error) {
    console.error('Error posting order:', error.message);
    console.error('Error details:', error.response?.data || error);
    throw new Error('Failed to create order. See logs for details.');
  }
};

module.exports = postOrder;

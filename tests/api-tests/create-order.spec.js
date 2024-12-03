const { test, expect } = require('@playwright/test');
const getAccessToken = require('../../src/api/getToken');
const postOrder = require('../../src/api/postOrderAPI');
const getSimsList = require('../../src/api/getEsimsList');

test.describe('API Tests for eSIM Orders', () => {
  let token;

  test.beforeAll(async () => {
    console.log('Fetching access token...');
    token = await getAccessToken();
    console.log('Access token fetched:', token);
    expect(token).toBeTruthy(); // Validate the token
  });

  test('Should fetch eSIM list successfully', async () => {
    const response = await getSimsList(token);
    console.log('eSIM list response:', response.data);
    expect(response.status).toBe(200);
    expect(response.data).toBeTruthy();
  });

  test('Should create an order successfully', async () => {
    const requestBody = {
      quantity: '1',
      package_id: 'merhaba-7days-1gb',
      type: 'sim',
    };
  
    // Post the order
    const responsePostOrder = await postOrder(token, requestBody);
    console.log('Post Order Response:', responsePostOrder.data);
    expect(responsePostOrder.status).toBe(200);
  
    // Fetch the order list
    const responseGetOrderList = await getSimsList(token);
    console.log('Get Order List Response:', responseGetOrderList.data);
    expect(responseGetOrderList.status).toBe(200);
  
    // Debugging the data structures
    const orderList = responseGetOrderList.data?.data || [];
    console.log('Order List:', orderList);
  
    const createdOrderId = responsePostOrder.data?.data?.id;
    console.log('Created Order ID:', createdOrderId);
  
    const order = orderList.find((order) => order.simable?.id === createdOrderId);
    console.log('Matched Order:', order);
  
    // Error, here, fix it. 
    expect(order).toBeTruthy();
  });
  
});

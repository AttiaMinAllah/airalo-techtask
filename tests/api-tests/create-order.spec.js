const { test, expect } = require('@playwright/test');
const getAccessToken = require('../../src/api/get-access-token');
const postOrder = require('../../src/api/create-order');
const getOrderDetails = require('../../src/api/get-esim-list');

test.describe('API Automation Tests for Airalo Partner API', () => {
  let token;

  test.beforeAll(async () => {
    token = await getAccessToken();
    expect(token).toBeTruthy();
  });

  test('Create the test order and verify the response', async () => {
    const requestBody = {
      quantity: '6',
      package_id: 'merhaba-7days-1gb',
    };
    // Create the order
    const responsePostOrder = await postOrder(token, requestBody);
    expect(responsePostOrder.status).toBe(200);
    const createdOrderId = responsePostOrder.data?.data?.id;
    expect(createdOrderId).toBeTruthy();

    // Fetch the order details to verify the order creation
    const responseGetOrderDetails = await getOrderDetails(token, createdOrderId);
    expect(responseGetOrderDetails.status).toBe(200);
    
    // Validate the order details such as, order ID, package ID and quantity 
    const orderDetails = responseGetOrderDetails.data?.data || {};
    expect(orderDetails.id).toBe(createdOrderId);
    expect(orderDetails.package_id).toBe('merhaba-7days-1gb');
    expect(orderDetails.quantity).toBe(6);
  });
});

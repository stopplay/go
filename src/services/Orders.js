/**
 * @flow
 * @format
 */

import api from './config';

export type OrderType = {
  clientName: string,
  orderId: string,
  date: string,
};

const getHistory = async (): any => {
  try {
    const response = await api.get('orders/api/orders/');
    if (response.status === 200) {
      return response.data.results;
    }
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

const createOrder = async (newOrder: any): any => {
  try {
    // Preparing Request
    newOrder.address = newOrder.address ? newOrder.address : {};
    // Fixing to Bread club Collection
    if (!newOrder.infos.type_of_order.includes('clube')) {
      newOrder.credit_card = newOrder.credit_card.id;
    } else {
      delete newOrder.credit_card;
    }
    newOrder.products = newOrder.products.map(product => ({
      product_id: product.product_id,
      quantity: product.quantity,
      product: {
        name: product.name,
        price: product.price,
      },
      extras: product.extras.map(extra => {
        return {
          ingredient: `${extra.id}`,
          quantity: extra.quantity,
        };
      }),
    }));
    const response = await api.post('orders/api/orders/', newOrder);
    if (response.status === 201) {
      return response.data;
    }
    return null;
  } catch (error) {
    const message = Object.values(error.response.data)[0];
    throw { message };
  }
};

const cancelOrder = async (orderId: number): any => {
  try {
    const response = await api.post(
      `/orders/api/orders/${orderId}/cancel_order/`,
    );

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    throw { message: 'details.error.cancel' };
  }
};

const getEstimateTime = async (): Promise<any> => {
  try {
    const response = await api.get('orders/api/get_estimated_time');
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export default { getHistory, createOrder, cancelOrder, getEstimateTime };

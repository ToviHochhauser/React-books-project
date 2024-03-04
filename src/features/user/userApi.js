import axios from 'axios';

const baseURL = 'http://localhost:4500/api/user'; // Update this with your actual backend URL

 const OrderApi = axios.create({
  baseURL,
});
export const registerUser = async (user) => {
  try {
    const response = await OrderApi.post('/register', registerUser);
    return response.data;
  } catch (error) {
    console.error('Error registering new user:', error);
    throw error;
  }
};
export default OrderApi;
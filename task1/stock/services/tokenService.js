// services/tokenService.js
const axios = require('axios');

const AUTH_URL = 'http://20.244.56.144/evaluation-service/auth';

const credentials = {
  email: "sakshi.nagrare2004@gmail.com",
  name: "Sakshi Nagrare",
  githubUsername: "sakshinagrare",
  rollNo: "TIT-21",
  collegeName: "Dr.D.Y.Patil Institute Of Technology",
  accessCode: "KRjUUU",
  clientID: "f0706c77-cf1d-416a-9fed-036b8e971a61",
  clientSecret: "FczHkCMgGRvQqVMy"
};

let cachedToken = null;
let tokenExpiry = null; // timestamp in ms

async function fetchToken() {
  try {
    const response = await axios.post(AUTH_URL, credentials);
    const token = response.data.access_token;
    const expiresIn = response.data.expires_in; // seconds

    cachedToken = token;
    tokenExpiry = Date.now() + expiresIn * 1000 - 60000; // refresh 1 min before expiry

    console.log('New token fetched');
    return token;
  } catch (error) {
    console.error('Error fetching token:', error.response?.data || error.message);
    throw error;
  }
}

async function getToken() {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }
  return await fetchToken();
}

module.exports = { getToken };

const axios = require('axios');

async function testAPI() {
  try {
    const res = await axios.get('http://20.244.56.144/evaluation-service/stocks/NVDA?minutes=50');
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

testAPI();

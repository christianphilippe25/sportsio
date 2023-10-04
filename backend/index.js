// Import the Axios library
const axios = require('axios');

// Define the API URL you want to request
const apiUrl = 'localhost';

// Make a GET request using Axios
axios.get(apiUrl)
  .then(function (response) {
    // Handle a successful response
    console.log('Response data:', response.data);
  })
  .catch(function (error) {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });

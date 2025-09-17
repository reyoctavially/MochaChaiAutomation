require("dotenv").config();
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 5000,
});

module.exports = api;

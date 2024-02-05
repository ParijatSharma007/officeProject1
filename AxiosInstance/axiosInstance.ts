import axios from "axios";

export const assetInstance = axios.create({
  baseURL: process.env.ASSETS_URL
});

export const rateInstance = axios.create({
  baseURL: process.env.RATES_URL
});

export const exchangeInstance = axios.create({
  baseURL : process.env.EXCHANGE_URL
})

export const marketInstance = axios.create({
  baseURL : process.env.MARKET_URL
})
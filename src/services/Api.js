import axios from 'axios';

const BASE_URL = 'https://api.quotable.io';

export const getRandom = async (random = 'random') => {
  const resp = await axios(`${BASE_URL}/${random}`);
  return resp.data;
};

export const getAuthors = async (page) => {
  const resp = await axios(`${BASE_URL}/authors?page=${page}`);
  return resp.data;
};

export const getQuotes = async (query) => {
  const resp = await axios(`${BASE_URL}/search/quotes?query=${query}`);
  return resp.data;
};

export const getCategories = async (page = 1) => {
  const resp = await axios(`${BASE_URL}/authors?page=${page}`);
  return resp.data;
};

export const getAllQuotes = async (page = 1) => {
  const resp = await axios(`${BASE_URL}/quotes?page=${page}`);
  return resp.data;
};

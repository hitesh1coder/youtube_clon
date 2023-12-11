/** @format */

import axios from "axios";

const BASE_URL = import.meta.env.VITE_YOUTUBE_API_URL;

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
  },
};
export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

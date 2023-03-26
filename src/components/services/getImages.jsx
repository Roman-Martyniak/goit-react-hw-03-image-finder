import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;
const KEY = '31231241-e5a05ea47e3995ffe04a4501d';

export const getImages = async function (query, page) {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
